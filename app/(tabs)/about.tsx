import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";



export default function Screen() {
    return (
        <View style={styles.container}>
            <Text>Hi 👋, I'm Jean Carlo</Text>
            <Text>🌱 I’m currently learning Javascript</Text>
            <Text>💬 Ask me about Javascript</Text>
            <Text>📫 How to reach me jeancarlo_fcl@hotmail.com</Text>
            <View style={styles.buttons}>
                <Link href="/other" asChild>
                    <Pressable style={styles.likend}>
                        <Text style={styles.h1}>LIKENDIN</Text>
                    </Pressable>
                </Link>
                <Link href="/other" asChild>
                    <Pressable style={styles.likend}>
                        <Text style={styles.h2}>DIO.ME</Text>
                    </Pressable>
                </Link>
                <Link href="/other" asChild>
                    <Pressable style={styles.likend}>
                        <Text style={styles.h3}>GITHUB</Text>
                    </Pressable>
                </Link>
            </View>
           
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    likend:{
        width:70,
        height:22,
        borderWidth:1,
        alignItems:"center",
        backgroundColor: "black",
        borderRadius: 10
    },
    h1:{
        color: "#FFFFFF",
        fontWeight:'bold',
        fontSize: 13 
    },
    h2:{
        color: "#00c3ff",
        fontWeight:'bold',
        fontSize: 13 
    },
    h3:{
        color: "#ff9900",
        fontWeight:'bold',
        fontSize: 13
    },
    buttons:{
        flexDirection: "row"
    },
})