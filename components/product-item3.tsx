import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { db } from '../firebase'; // Importe a instância do Firestore
import { useRouter } from 'expo-router'; // Importar o hook useRouter

interface Produto {
  id: string;
  idCategory: string;
  image: string;
}

const ProductList3: React.FC = () => {
  const [products, setProducts] = useState<Produto[]>([]);
  const router = useRouter(); // Hook de navegação

  useEffect(() => {
    const unsubscribe = db.collection('produtos').onSnapshot((snapshot) => {
      const productData: Produto[] = snapshot.docs.map((doc) => ({
        ...doc.data() as Produto,
        id: doc.id, // Adiciona o id do Firestore como chave única
      }));
      setProducts(productData);
    });

    return () => unsubscribe(); // Limpar o listener ao desmontar o componente
  }, []);

  // Função para navegar para a página do produto
  const handleProductPress = (id: string) => {
    router.push(`/product/${id}`); // Passa diretamente o id para a rota
  };

  const renderProduto = ({ item }: { item: Produto }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => handleProductPress(item.id)} // Navegar ao clicar no produto
    >
      {item.image ? (
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
          resizeMode="contain"
        />
      ) : null}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={products}
        keyExtractor={(item) => item.id} // Agora deve ter uma key única para cada item
        renderItem={renderProduto}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 50,
    paddingLeft: 5,
  },
  productItem: {
    padding: 10,
    flexDirection: 'row',
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#cccccc',
  },
});

export default ProductList3;
