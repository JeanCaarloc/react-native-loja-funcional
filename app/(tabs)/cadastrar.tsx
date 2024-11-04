import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button, Image } from 'react-native';
import { db } from '../../firebase'; // Importe o arquivo de configuração Firebase

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

  // Carregar os produtos do Firestore
  useEffect(() => {
    const unsubscribe = db.collection('produtos').onSnapshot((snapshot) => {
      const produtosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Produto[];
      setProdutos(produtosData);
    });

    return unsubscribe; // Limpa o listener quando o componente é desmontado
  }, []);

  // Função para cadastrar novo produto
  const cadastrarProduto = async () => {
    await db.collection('produtos').add({
      title,
      description,
      price: parseFloat(price),
      idCategory,
      image
    });

    // Limpar os campos
    setTitle('');
    setDescription('');
    setPrice('');
    setIdCategory('');
    setImage('');
  };

  return (
    <ScrollView style={styles.contentContainer}>
      {/* Formulário de cadastro de produto */}
      <View style={styles.inputContainer}>
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
        <Button title="Cadastrar Produto" onPress={cadastrarProduto} />
      </View>

      {/* Lista de produtos cadastrados */}
      <View>
        {produtos.map((produto) => (
          <View style={styles.productItem} key={produto.id}>
            <Text style={styles.productText}>
              {produto.title} - {produto.description} - R$ {produto.price} ({produto.idCategory})
            </Text>
            {produto.image ? (
              <Image
                source={{ uri: produto.image }}
                style={styles.productImage}
                resizeMode="contain"
              />
            ) : null}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  contentContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  productText: {
    fontSize: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});