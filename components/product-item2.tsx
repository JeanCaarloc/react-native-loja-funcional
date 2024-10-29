import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { Product } from "../types/product"
import { Link } from "expo-router";

type Props = {
    data: Product;
}

export const ProductItem2 = ({ data }: Props) => {
    return (
        // rota dinamica
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.container}>
                
                <Image
                    style={styles.img}
                    source={{ uri: data.image }}
                    resizeMode="cover"
                />
            </Pressable>
        </Link>

    );
}
const styles = StyleSheet.create({
    container: {
        width:50,
        height:50,
        borderRadius: 50,
        marginRight: 50,
        paddingLeft:5
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: "#cccccc",
    },

})