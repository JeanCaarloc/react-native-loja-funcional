import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";
import { getProductsId } from "../../services/product";
import React, { useState } from 'react';
import QuantitySelector from '../../components/quantitySelector';

export default function Screen() {
    const [quantity, setQuantity] = useState(1);



    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
        // Aqui você pode adicionar lógica para atualizar o total do carrinho ou valor do item
    };

    // Receber o id
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    const product = getProductsId(idProduct);
    if (!product) return router.back;

    const comprar = () => {
        alert("Item " + product.title + " foi adicionado ao carrinho.");
    };

    // Função para calcular o valor total com base na quantidade
    const calculateTotalPrice = () => {
        return (product.price * quantity).toFixed(2);
    };

    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };

    return (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                <Stack.Screen options={{
                    title: 'Produtos',
                    headerTitleAlign: 'center',
                    navigationBarColor: '#714246',
                    headerStyle: {
                        backgroundColor: '#714246',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTintColor: "#cfbb78"
                }} 
                />
                
                    <Image
                        style={styles.img}
                        source={{ uri: product.image }}
                        resizeMode="cover"
                    />
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <View style={styles.priceArea}>
                        <QuantitySelector onQuantityChange={handleQuantityChange} />
                        <Text style={styles.price}>R${calculateTotalPrice()}</Text>
                    </View>
                
                <View style={styles.buttonArea}>
                    <Button
                        title="Comprar Agora"
                        onPress={comprar}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonArea: {
        width: '80%',
        padding: 10,
        

    },
    img: {
        width: '80%',
        height: 300,
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#cfbb78",
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    description: {
        fontSize: 14,
        color: "white",
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
        marginBottom: 20,
        fontWeight: "bold"
    },
    priceArea: {
        width:'80%',
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: "center",
        color: "black",
        backgroundColor: "#cfbb78",
        paddingLeft: 10,
        borderRadius: 8,
        borderWidth: 1,
        paddingRight: 10
    }
});
