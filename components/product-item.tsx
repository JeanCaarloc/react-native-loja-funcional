import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { Product } from "../types/product"
import { Link } from "expo-router";
import React, { useState } from 'react';
import QuantitySelector from '../components/quantitySelector';

type Props = {
    data: Product;
}



export const ProductItem = ({ data }: Props) => {


    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
        // Aqui você pode adicionar lógica para atualizar o total do carrinho ou valor do item
    };


    return (
        // rota dinamica
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    style={styles.img}
                    source={{ uri: data.image }}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <View style={styles.qntPrice}>
                        <QuantitySelector onQuantityChange={handleQuantityChange} />
                        <Text style={styles.quantity}>{quantity}</Text>
                        <Text style={styles.price}>R${data.price.toFixed(2)}</Text>
                    </View> 
                </View>
            </Pressable>
        </Link>


    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 20
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: "#cccccc",
        marginRight: 20
    },
    info: {
        flex: 1,

    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: '#cfbb78',
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    description: {
        fontSize: 13,
        color: "#cfbb78",
        marginBottom: 10
    },
    qntPrice:{
        borderWidth:1,
        borderColor: "white",
        flexDirection:"row"
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "center",
        color: "black",
        backgroundColor: "#cfbb78",
        paddingLeft:10,
        borderRadius: 8,
        borderWidth: 1
    },
    quantity: {
        marginTop: 10,
        fontSize: 16,
    },
})