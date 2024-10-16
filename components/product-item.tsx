import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { Product } from "../types/product"
import { Link } from "expo-router";

type Props = {
    data: Product;
}

export const ProductItem = ({ data }: Props) => {
    return (
        // rota dinamica
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    style={styles.img}
                    source={{uri: data.image}}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.price}>R${data.price.toFixed(2)}</Text>
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
    img:{
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: "#cccccc",
        marginRight: 20
    },
    info:{
        flex: 1,

    },
    title:{
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: '#cfbb78',
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    description:{
        fontSize: 13,
        color: "#cfbb78",
        marginBottom: 10
    },
    price:{
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        color: "black",
        backgroundColor: "#cfbb78",
        marginLeft: 160,
        borderRadius: 8
    },
})