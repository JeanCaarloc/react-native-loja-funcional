import { Text, View, StyleSheet, FlatList, TextInput, ImageBackground, Linking, Image, ScrollView, TouchableOpacity, Pressable, StatusBar } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem2 } from "../../components/product-item2";
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";
import ProductList3 from '../../components/product-item3';

export default function Screen() {
    const [searchQuery, setSearchQuery] = useState(""); // Estado para armazenar o texto de busca
    const [isFocused, setIsFocused] = useState(false); // Para controlar quando mostrar a lista de resultados

    const products = getAllProducts();

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) // Filtra os produtos
    );

    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };


    const carrinho = () => {
        // alert("Você esta comprando: "props.product.name)
        const url = 'https://salaocare.com.br/';
        //importar o linking e fazer ele abrir o link
        Linking.openURL(url).catch(err => {
            console.error("Failed to open URL:", err);
            alert("Não foi possivel abrir o link");
        });
    }

    return (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

                    <View style={styles.img}>
                        <Image
                            source={require('../../assets/logo.jpg')}
                            style={styles.logo}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.nameLoja}>
                        <Text style={styles.h1}>Eu Quero Cosméticos </Text>
                        <Text style={styles.h2}>Cosmeticos - Perfumaria</Text>
                    </View>
                    <View style={styles.containerInput}>
                        <View style={styles.pesquisa}>
                            <FontAwesome name="search" size={20} color="#cfbb78" style={styles.icon} />
                            <TextInput
                                placeholder="Buscar..."
                                style={styles.input}
                                placeholderTextColor={"#ffffff"}
                                value={searchQuery} // Valor do estado de busca
                                onChangeText={text => setSearchQuery(text)} // Atualiza o estado de busca
                                onFocus={() => setIsFocused(true)} // Mostra a lista de resultados
                                onBlur={() => setIsFocused(false)} // Esconde a lista de resultados quando o campo perde o foco

                            />
                        </View>
                        {/* Exibir a lista de resultados filtrados */}
                        {isFocused && filteredProducts.length > 0 && (
                            <View style={styles.searchResults}>
                                <FlatList
                                    data={filteredProducts}
                                    renderItem={({ item }) => (
                                        <Pressable style={styles.resultItem}>
                                            <Text style={styles.resultText}>{item.title}</Text>
                                        </Pressable>
                                    )}
                                    keyExtractor={item => item.id.toString()}
                                />
                            </View>
                        )}
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.h4}>Produtos</Text>
                    </View>
                    <View style={styles.productFire}>
                        <ProductList3 />
                    </View>
                    {/* Deixe a FlatList fora do ScrollView */}
                    
                    <View style={styles.info}>
                        <Text style={styles.h4}>Serviços de Estética</Text>
                    </View>
                    <View style={styles.artigos}>
                        <View style={styles.areaSlides}>
                            <Pressable style={styles.slides} onPress={carrinho}>
                                <Image
                                    source={{ uri: "data:image/jpeg;base64,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" }}
                                    style={styles.skillImage}
                                />
                            </Pressable>
                            <Text style={styles.h3}>Unhas</Text>
                        </View>
                        <View style={styles.areaSlides}>
                            <Pressable style={styles.slides} onPress={carrinho}>
                                <Image
                                    source={{ uri: "https://i0.wp.com/www.verdeate.com/wp-content/uploads/2021/04/Beneficios-da-massagem-relaxante-para-pes-e-pernas.jpg?fit=1002%2C668&ssl=1" }}
                                    style={styles.skillImage}
                                />
                            </Pressable>
                            <Text style={styles.h3}>Massagem</Text>
                        </View>
                        <View style={styles.areaSlides}>
                            <Pressable style={styles.slides} onPress={carrinho}>
                                <Image
                                    source={{ uri: "data:image/jpeg;base64,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" }}
                                    style={styles.skillImage}
                                />
                            </Pressable>
                            <Text style={styles.h3}>Depilação</Text>
                        </View>
                    </View>
                    <View style={styles.artigos}>
                        <View style={styles.areaSlides}>
                            <Pressable style={styles.slides} onPress={carrinho}>
                                <Image
                                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWDLL4UZ0AGWzd9PbsRn5wXEKK2m5mhxYKQ&s" }}

                                    style={styles.skillImage}
                                />
                            </Pressable>
                            <Text style={styles.h3}>Maquiagem</Text>
                        </View>
                        <View style={styles.areaSlides}>
                            <Pressable style={styles.slides} onPress={carrinho}>
                                <Image
                                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIQt5ZyjC7IEFJGpU-f1--neNNAutsmwikQ&s" }}
                                    style={styles.skillImage}
                                />
                            </Pressable>
                            <Text style={styles.h3}>Cabelos</Text>
                        </View>
                        <View style={styles.areaSlides}>
                            <Pressable style={styles.slides} onPress={carrinho}>
                                <Image
                                    source={{ uri: "data:image/jpeg;base64,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" }}
                                    style={styles.skillImage}
                                />
                            </Pressable>
                            <Text style={styles.h3}>Estética</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    scrollContent: {
        flexGrow: 1,  // Garante que o conteúdo preencha o ScrollView
    },
    container: {
        flex: 1,
        paddingTop: 20
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    img: {
        alignItems: "center",
        paddingTop: 20
    },
    nameLoja: {
        alignContent: "center",
        alignItems: "center",
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#cfbb78",
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    h2: {
        fontSize: 12,
        color: "#ffffff"
    },
    containerInput: {
        alignContent: "center",
        alignItems: "center"
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 5,
    },
    pesquisa: {
        width: "90%",
        height: 30,
        color: "#cccccc",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#cccccc",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 5,
        marginTop: 15
    },
    icon: {
        marginRight: 10,
    },
    info: {
        width: "100%",
        height: 20,

        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    h4: {
        color: "#cfbb78",
        fontWeight: "bold",
        fontSize: 16,
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    input: {
        fontSize: 16,
        color: "#FFFFFFF"
    },

    itens: {
        width: "100%",
        height: 90,
        flexDirection: "row"
    },
    artigos: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    slides: {
        width: 90,
        height: 70,

        borderRadius: 10,
        backgroundColor: "#ffffff",
    },
    skillImage: {
        width: 90,
        height: 70,
        borderRadius: 10,
    },
    areaSlides: {
        alignItems: "center"
    },
    h3: {
        color: "#cfbb78",
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    searchResults: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: 40,
        width: "90%",
        maxHeight: 150,
        borderRadius: 5,
        zIndex: 1000, // Para garantir que a lista fique sobre outros componentes
    },
    resultItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    resultText: {
        color: "#000",
    },
    productFire:{
        flexDirection:'row',
    },
});
