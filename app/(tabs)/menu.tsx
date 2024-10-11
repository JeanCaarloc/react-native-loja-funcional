import { Text, View, StyleSheet, FlatList } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";

export default function Screen() {
    //puxando todos os produtos
    const products = getAllProducts();
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Text>Conta</Text>
            </View>
            <View style={styles.button}>
                <Text>Configurações</Text>
            </View>
            <View style={styles.button}>
                <Text>Carrinho</Text>
            </View>
            <View style={styles.button}>
                <Text>Duvidas</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
 
    },
    button:{
        width:"90%",
        height:100,
        borderWidth: 1,
        margin:20,
        justifyContent:"center",
        alignItems:"center"

    }

})