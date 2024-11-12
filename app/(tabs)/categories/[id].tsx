import { View, Text, StyleSheet, FlatList, ActivityIndicator, ImageBackground } from "react-native";
import { db } from "../../../firebase";
import { ProductItem } from "../../../components/product-item";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Category } from "../../../types/category";
import { Product } from "../../../types/product"; // Importe a interface do produto

export default function Screen() {
    const { id } = useLocalSearchParams();
    const [category, setCategory] = useState<Category | null>(null); // Para armazenar a categoria
    const [products, setProducts] = useState<Product[]>([]); // Especifica o tipo do estado
    const [loading, setLoading] = useState(true); // Estado para controle de carregamento



    useEffect(() => {
        const fetchCategoryAndProducts = async () => {
            if (typeof id === 'string') { // Verifica se id é uma string
                // Obter categoria pelo ID
                const categoryDoc = await db.collection('category').doc(id).get();
                if (categoryDoc.exists) {
                    setCategory({ id: categoryDoc.id, ...categoryDoc.data() } as Category);

                    // Obter produtos associados à categoria
                    const productsSnapshot = await db.collection('produtos').where('idCategory', '==', id).get();
                    const productsData = productsSnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    })) as Product[]; // Garante que productsData tenha o tipo correto

                    setProducts(productsData);
                } else {
                    router.back(); // Voltar se a categoria não existir
                }
            } else {
                router.back(); // Voltar se id não for uma string
            }

            setLoading(false); // Finaliza o carregamento
        };

        fetchCategoryAndProducts();
    }, [id]);

    
    if (!category) return null; // Retornar null enquanto a categoria não é carregada

    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };

    return (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <View style={styles.container}>
                <Stack.Screen options={{ title: category.title }} />
                <FlatList
                    data={products}
                    renderItem={({ item }) => <ProductItem data={item} />}
                    keyExtractor={item => item.id}
                    style={styles.list}
                    ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto encontrado nesta categoria.</Text>}
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
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#555',
    },
});