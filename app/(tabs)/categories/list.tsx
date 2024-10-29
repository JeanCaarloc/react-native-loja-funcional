import { Text, View, StyleSheet, FlatList, ImageBackground, StatusBar } from "react-native";

import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";
import { Stack } from "expo-router";

export default function Screen() {
    //puxando todos as categorias
    const categories = getAllCategories();

    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };
    return (

        
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <Stack.Screen options={{
                title: 'Categorias',
                headerTitleAlign: 'center',
                navigationBarColor:'#714246',
                headerStyle: {
                  backgroundColor: '#714246',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTintColor:"#cfbb78"
            }}
            />
                <FlatList
                    data={categories}
                    renderItem={({ item }) => <CategoryItem data={item} />}
                    keyExtractor={item => item.id.toString()}
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%"
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20,
        marginBottom: 10
    },
    listContent: {
        paddingBottom: 20
    }
})