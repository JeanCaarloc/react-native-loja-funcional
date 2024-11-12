import { Pressable, Text, StyleSheet, Image, View } from "react-native"; // Importa componentes do React Native
import { Category } from "../types/category"; // Importa o tipo Category definido em um arquivo de tipos
import { router } from "expo-router"; // Importa o roteador do expo-router para navegação


// Define o tipo de propriedades esperadas pelo componente
type Props = {
  data: Category; // A propriedade data é do tipo Category
};

// Componente que representa um item de categoria
export const CategoryItem = ({ data }: Props) => {
  // Função que navega para a tela da categoria correspondente ao ser clicada
  const click = () => {
    router.navigate(`/categories/${data.id}`);
  };



  return (
    <Pressable onPress={click} style={styles.container}>
      <Image 
      source={{ uri: data.imageUrl }} 
      style={styles.image}
      resizeMode="cover" 
      />
      <View style={styles.bg}></View>
            <View style={styles.box}>
                <Text style={styles.title}>{data.title}</Text>
            </View>
    </Pressable>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    margin: 10, // Margem ao redor do item da categoria
    alignItems: "center", // Centraliza o texto e a imagem
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  bg:{
    height: 150,
    borderRadius: 10,
    backgroundColor: "#000000",
    opacity: 0.5,
    marginTop: -150
},
box:{
    height: 150,
    marginTop: -150,
    justifyContent: "center",
    alignItems: "center"
},
title:{
  color: "#FFFFFF",
  fontSize: 16
},
});