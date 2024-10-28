import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
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


    //receber o id
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string)

    const product = getProductsId(idProduct);
    if (!product) return router.back;

    const comprar = () => {
        alert("Item " + product.title + " foi adicionado ao carrinho.");
    }

    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };

    return (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <SafeAreaView style={styles.container}>
                <Stack.Screen options={{ title: '' }} />
                <ScrollView style={styles.area}>
                    <Image
                        style={styles.img}
                        source={{ uri: product.image }}
                        resizeMode="cover"
                    />
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <View style={styles.priceArea}>
                        <QuantitySelector onQuantityChange={handleQuantityChange} />
                        <Text style={styles.price}>R${product.price.toFixed(2)}</Text>
                    </View>

                </ScrollView>
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
        paddingTop: 10
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1,
    },
    area: {
        flex: 1,
        padding: 10,
    },
    buttonArea: {
        padding: 10,
    },
    img: {
        width: '100%',
        height: 340,
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#cfbb78",
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    description: {
        fontSize: 1,
        color: "white",
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
        marginBottom: 20,
        fontWeight:"bold"
    },
    priceArea: {
        padding: 10,
        borderRadius: 10,
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"space-between"
    
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: "center",
        color: "black",
        backgroundColor: "#cfbb78",
        paddingLeft:10,
        borderRadius: 8,
        borderWidth: 1,
        paddingRight:10

    }
})