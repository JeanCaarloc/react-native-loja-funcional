import { Text, View, StyleSheet, FlatList, ImageBackground } from "react-native";
import { getAllProducts, getProductsByCategory } from "../../../services/product";
import { ProductItem } from "../../../components/product-item";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../services/category";

export default function Screen() {
    //recebendo o id de categories
    const { id } = useLocalSearchParams();
    // converter em int para poder consultar por id na lista de dados
    const idCategory = parseInt(id as string);
    // puxando as categorias por id
    const category = getCategoryById(idCategory);
    if (!category) return router.back;

    //Pegando a lista dos produtos daquela categoria
    const products = getProductsByCategory(idCategory);

    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: category.title }} />
            <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
                <FlatList
                    data={products}
                    renderItem={({ item }) => <ProductItem data={item} />}
                    keyExtractor={item => item.id.toString()}
                    style={styles.list}
                />
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        width: "100%",
        height: "100%"
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20,
    }
})