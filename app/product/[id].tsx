import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator,  Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter, useLocalSearchParams, router, Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';
import QuantitySelector from '../../components/quantitySelector';
import { db } from '../../firebase';
import { Product } from '../../types/product';
import { Ionicons } from '@expo/vector-icons';
import { Button } from "../../components/button";

// Componente principal da tela de Produto
export default function ProductScreen() {
    // Obtém o ID do produto a partir dos parâmetros da URL
    const { id } = useLocalSearchParams();
    // Estado para armazenar o produto e controle de carregamento
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
        // Aqui você pode adicionar lógica para atualizar o total do carrinho ou valor do item
    };

    // Efeito que busca os dados do produto do banco de dados
    useEffect(() => {
        const fetchProduct = async () => {
            if (id) {
                const docRef = db.collection("produtos").doc(id as string);
                const doc = await docRef.get();
                // Se o documento existe, atualiza o estado com os dados do produto
                if (doc.exists) {
                    setProduct({ id: doc.id, ...doc.data() } as unknown as Product);
                } else {
                    // Retorna à tela anterior se o produto não for encontrado
                    router.back();
                }
                setLoading(false); // Termina o carregamento
            }
        };

        fetchProduct();
    }, [id]);

    // Exibe indicador de carregamento enquanto os dados estão sendo buscados
    if (loading) {
        return (
            <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#004398" />
            </SafeAreaView>
        );
    }
    // Se o produto não foi encontrado, não renderiza nada
    if (!product) return null;
    // Função de exemplo para manipular o evento de compra
    const comprar = () => {
        alert("Você clicou no item: " + product.title);
    };
    // Função para retornar à tela anterior
    const voltar = () => {
        router.back();
    };

    // Função para calcular o valor total com base na quantidade
    const calculateTotalPrice = () => {
        return (product.price * quantity).toFixed(2);
    };

    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };

    return (

        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                <Stack.Screen options={{
                    title: 'Produtos',
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
                <Image
                    style={styles.img}
                    source={{ uri: product.image }}
                    resizeMode="cover"
                />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.priceArea}>
                    <QuantitySelector onQuantityChange={handleQuantityChange} />
                    <Text style={styles.price}>R${calculateTotalPrice()}</Text>
                </View>

                <View style={styles.buttonArea}>
                    <Button
                        title="Comprar Agora"
                        onPress={comprar}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",

    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonArea: {
        width: '80%',
        padding: 10,
        
    },
    img: {
        width: '80%',
        height: 300,
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#cfbb78",
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    description: {
        fontSize: 14,
        color: "white",
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
        marginBottom: 20,
        fontWeight: "bold"
    },
    priceArea: {
        width:'80%',
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: "center",
        color: "black",
        backgroundColor: "#cfbb78",
        paddingLeft: 10,
        borderRadius: 8,
        borderWidth: 1,
        paddingRight: 10
    }
});
