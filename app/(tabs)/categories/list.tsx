import { Text, View, StyleSheet, FlatList } from "react-native";
import { getAllProducts } from "../../../services/product";
import { ProductItem } from "../../../components/product-item";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";

export default function Screen () {
    //puxando todos as categorias
    const categories = getAllCategories();
    return(
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({item}) => <CategoryItem data={item}/>}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    list:{
        flex: 1,
        width: '100%',
        padding: 20,
        marginBottom: 10
    },
    listContent:{
        paddingBottom: 20
    }
})