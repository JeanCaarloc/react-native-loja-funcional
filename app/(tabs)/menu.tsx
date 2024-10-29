import { Text, View, StyleSheet, FlatList, ImageBackground, Pressable, Linking, StatusBar } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";

export default function Screen() {
    //puxando todos os produtos
    const products = getAllProducts();

    const carrinho = () => {
        // alert("Você esta comprando: "props.product.name)
        const url = 'https://pranx.com/fbi-warning/';
        //importar o linking e fazer ele abrir o link
        Linking.openURL(url).catch(err => {
            console.error("Failed to open URL:", err);
            alert("Não foi possivel abrir o link");
        });
    }

    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };
    return (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                <View style={styles.button}>
                    <Text style={styles.h1}>Conta</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.h1}>Configurações</Text>
                </View>
                <Pressable style={styles.button} onPress={carrinho}>
                    <Text style={styles.h1}>Carrinho</Text>
                </Pressable>
                <View style={styles.button}>
                    <Text style={styles.h1}>Duvidas</Text>
                </View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: "70%",
        height: 60,
        borderWidth: 1,
        margin: 20,
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

})