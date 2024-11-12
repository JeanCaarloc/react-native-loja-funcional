import { View, StyleSheet, FlatList, ActivityIndicator, ImageBackground } from "react-native"; // Importa componentes do React Native
import { db } from "../../../firebase"; // Importa a instância do Firebase
import { CategoryItem } from "../../../components/category-item"; // Importa o componente para exibir cada categoria
import { useEffect, useState } from "react"; // Importa hooks do React para gerenciar estado e efeitos
import { StatusBar } from "react-native";
import { Stack } from "expo-router";

// Define a interface para a estrutura de dados de cada categoria
interface Category {
    id: string; // Identificador único da categoria
    title: string; // Título da categoria
    imageUrl: string; // URL da imagem de capa da categoria
}

// Componente principal da tela
export default function Screen() {
    // Estado para armazenar as categorias e o estado de carregamento
    const [category, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    // Hook useEffect para buscar categorias ao montar o componente
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // Faz a consulta ao Firestore para buscar categorias
                const snapshot = await db.collection('category').get();
                // Mapeia os documentos retornados para o formato Category[]
                const categoryData: Category[] = snapshot.docs.map(doc => ({
                    id: doc.id,
                    title: doc.data().title,
                    imageUrl: doc.data().imageUrl,
                }));
                // Atualiza o estado com as categorias recebidas
                setCategories(categoryData);
            } catch (error) {
                // Captura e exibe erros de busca
                console.error("Erro ao buscar categorias: ", error);
            } finally {
                // Define o estado de carregamento como false ao final da operação
                setLoading(false);
            }
        };

        fetchCategories(); // Chama a função para buscar categorias
    }, []); // Dependências vazias para rodar apenas na montagem do componente

    // Se ainda estiver carregando, exibe um indicador de carregamento
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#4973aa" />
            </View>
        );
    }
    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };
    // Renderiza a lista de categorias
    return (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                <Stack.Screen options={{
                    title: 'Categorias',
                    headerTitleAlign: 'center',
                    navigationBarColor: '#714246',
                    headerStyle: {
                        backgroundColor: '#714246',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTintColor: "#cfbb78"
                }}
                />
                <FlatList
                    data={category}
                    renderItem={({ item }) => <CategoryItem data={item} />}
                    keyExtractor={item => item.id.toString()}
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </ImageBackground>

    );
}

// Estilos do componente
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
        flex: 1, // Ocupa todo o espaço disponível
    },
    loadingContainer: {
        flex: 1, // Ocupa todo o espaço disponível
        justifyContent: "center", // Centraliza verticalmente
        alignItems: "center", // Centraliza horizontalmente
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
});