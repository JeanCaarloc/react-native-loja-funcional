import { Link, router } from "expo-router";
import { Text, View, StyleSheet, ImageBackground, Pressable, Linking, StatusBar, TouchableOpacity } from "react-native";

export default function Screen() {

    const carrinho = () => {
        // alert("Você esta comprando: "props.product.name)
        const url = 'https://pranx.com/fbi-warning/';
        //importar o linking e fazer ele abrir o link
        Linking.openURL(url).catch(err => {
            console.error("Failed to open URL:", err);
            alert("Não foi possivel abrir o link");
        });
    }

    const buttonCadastrar = () => {
        router.push("/cadastrar");
    }

    const buttonConta = () => {
        router.push("/conta");
    }


    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };
    return (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                <TouchableOpacity onPress={buttonConta} style={styles.button}>
                    <Text style={styles.h1}>Conta</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.h1}>Configurações</Text>
                </View>
                <Pressable style={styles.button} >
                    <Text style={styles.h1}>Carrinho</Text>
                </Pressable>
                <TouchableOpacity onPress={buttonCadastrar} style={styles.button}>
                    <Text style={styles.h1}>Cadastrar Produto</Text>
                </TouchableOpacity>

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