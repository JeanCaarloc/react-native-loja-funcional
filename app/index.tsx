import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen() {
    const Start = () => {
        router.replace('/home')
    }

    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" }
    return (

        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/logo.jpg')}
                    style={styles.logo}
                    resizeMode="cover"
                />
                <Text style={styles.h1}>Eu Quero Cosméticos </Text>
                <Button
                    title="Começar as compras"
                    onPress={Start}
                />
            </SafeAreaView>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    background: {
        width: "100%",
        height: "100%"
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // Faz a sobreposição preencher toda a tela
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor preta com 50% de opacidade
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#F2B181",
        textShadowColor: '#000000', // Cor da borda
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    
})