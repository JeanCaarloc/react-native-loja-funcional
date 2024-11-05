import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, FlatList, Pressable, ImageBackground } from 'react-native';
import { db } from '../../firebase';

interface Produto {
  id: string;
  idCategory: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function CadastrarProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [idCategory, setIdCategory] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('produtos').onSnapshot((snapshot) => {
      const produtosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Produto[];
      setProdutos(produtosData);
    });

    return unsubscribe;
  }, []);

  const cadastrarProduto = async () => {
    await db.collection('produtos').add({
      title,
      description,
      price: parseFloat(price),
      idCategory,
      image
    });

    setTitle('');
    setDescription('');
    setPrice('');
    setIdCategory('');
    setImage('');
  };

  const imagem = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };

  const renderProduto = ({ item }: { item: Produto }) => (
    <View style={styles.productItem}>
      <Text style={styles.productText}>
        {item.title} - R$ {item.price} ({item.idCategory})
      </Text>
      {item.image ? (
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
          resizeMode="contain"
        />
      ) : null}
    </View>
  );



  return (
    <ImageBackground source={imagem} style={styles.background} resizeMode="cover">
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>

          <Image
            source={require('../../assets/cadastroProduto.png')}
            style={styles.cadastroProduto}
          />


          <TextInput
            style={styles.input}
            placeholder="Título"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Preço"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="ID da Categoria"
            value={idCategory}
            onChangeText={setIdCategory}
          />
          <TextInput
            style={styles.input}
            placeholder="URL da imagem"
            value={image}
            onChangeText={setImage}
          />
          <Pressable style={styles.button} onPress={cadastrarProduto}>
            <Text style={styles.h1}>Cadastrar Produto</Text>
          </Pressable>
        </View>

        <FlatList
          data={produtos}
          renderItem={renderProduto}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop:60
  },
  inputContainer: {
    width: "80%",
    height: 400,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#cfbb78',
    elevation: 10, // Para Android
  },
  cadastroProduto: {
    width: "40%",
    height: "40%",
  },
  input: {
    width: "70%",
    height: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 10,
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  productItem: {
    width: '100%',
    flexDirection: 'row-reverse',
    paddingBottom: 10,

    justifyContent: 'flex-end'
  },
  productText: {
    fontSize: 14,
    paddingLeft: 5,
    color: '#cfbb78'
  },
  productImage: {
    width: 80,
    height: 80,
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    width: "50%",
    height: 30,
    borderWidth: 1,
    margin: 10,
    marginBottom:30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#714246",
    borderRadius: 10
  },
  h1: {
    color: "#cfbb78",
    textShadowColor: '#000000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});
