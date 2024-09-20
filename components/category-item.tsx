import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { Category } from "../types/category"
import { router } from "expo-router";

type Props ={
    data: Category;
}

export const CategoryItem = ({data}: Props) =>{
    //rota dinamica
    const click = () =>{
        router.navigate(`/categories/${data.id}`)
    }
    return(
        <Pressable style={styles.container} onPress={click}>
            <Image 
                style={styles.image}
                source={{uri: data.cover}}
                resizeMode="cover"
            />
            <View style={styles.bg}></View>
            <View style={styles.box}>
                <Text style={styles.title}>{data.title}</Text>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container:{
        margin: 10,
        backgroundColor: "#333333",
        borderRadius: 10
    },
    image:{
        width: "100%",
        height: 150,
        borderRadius: 10,
    },
    bg:{
        height: 150,
        borderRadius: 10,
        backgroundColor: "#000000",
        opacity: 0.6,
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
})