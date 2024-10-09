import { router } from "expo-router";
import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { Banner } from "../types/banner";


type Props ={
    data: Banner;
}

export const BannerItem = ({data}: Props) =>{
    return(
        <Pressable style={styles.container} >
            <Image 
                style={styles.image}
                source={{uri: data.image}}
                resizeMode="cover"
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1 
    },
    image:{
    },

})