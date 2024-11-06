import { View, Text, StyleSheet } from "react-native";



const app = () => {

    const editbox = () => {
        return(
            <View>

            </View>
        )
    }



    return(
        <View style={styles.container}>
            {editbox()}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent:"center",
        paddingTop: 50,
        height: "100%",
        paddingBottom: 25,
        gap: 45
    }

})