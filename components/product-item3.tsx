import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { db } from '../firebase'; // Importe a instância do Firestore

interface Produto {
  id: string;
  idCategory: string;
  image: string;

}
const ProductList3: React.FC = () => {
  const [products, setProducts] = useState<Produto[]>([]);

  useEffect(() => {
    const unsubscribe = db.collection('produtos').onSnapshot((snapshot) => {
      const productData: Produto[] = snapshot.docs.map((doc) => ({
        ...doc.data() as Produto,
      }));
      setProducts(productData);
    });

    return () => unsubscribe(); // Limpar o listener ao desmontar o componente
  }, []);


  const renderProduto = ({ item }: { item: Produto }) => (
    <View style={styles.productItem}>
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
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduto}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    borderRadius: 50,
    
    paddingLeft: 5
  },
  productItem: {
    padding: 10,
    flexDirection:'row'
  },

  productImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#cccccc",
    
  }
});

export default ProductList3;
