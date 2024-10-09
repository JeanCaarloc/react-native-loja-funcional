import { Text, View, StyleSheet, FlatList, TextInput, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem2 } from "../../components/product-item2";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Screen() {
    //puxando todos os produtos
    const products = getAllProducts();

    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };
    return (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <Tabs.Screen
                        options={{
                            headerBackground: () => (
                                <View style={{ backgroundColor: 'rgb(246,246,246,1)', height: '100%' }} />
                            ),
                            headerRight: () => (
                                <TouchableOpacity onPress={() => console.log('Edit button pressed')}>
                                    <Ionicons name="create-outline" size={28} color="rgba(0, 122, 255, 1)" style={{ paddingRight: 10 }} />
                                </TouchableOpacity>
                            ),
                            headerLeft: () => (
                                <TouchableOpacity onPress={() => console.log('Edit button pressed')}>
                                    <Text style={{ paddingLeft: 15, fontSize: 18, color: 'rgba(0, 122, 255, 1)' }}>Edit</Text>
                                </TouchableOpacity>
                            ),
                        }}
                    />
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
                            />
                        </View>
                    </View>
                    {/* Deixe a FlatList fora do ScrollView */}
                    <View style={styles.itens}>
                        <FlatList
                            data={products}
                            renderItem={({ item }) => <ProductItem2 data={item} />}
                            keyExtractor={item => item.id.toString()}
                            style={styles.list}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            decelerationRate="fast"
                        />
                    </View>
                    <Text>Artigos</Text>
                    <View style={styles.artigos}>
                        <View style={styles.areaSlides}>
                            <View style={styles.slides}></View>
                            <Text style={styles.h3}>Unhas</Text>
                        </View>
                        <View style={styles.areaSlides}>
                            <View style={styles.slides}></View>
                            <Text style={styles.h3}>Massagem</Text>
                        </View>
                        <View style={styles.areaSlides}>
                            <View style={styles.slides}></View>
                            <Text style={styles.h3}>Depilação</Text>
                        </View>
                    </View>
                    <View style={styles.artigos}>
                        <View style={styles.areaSlides}>
                            <View style={styles.slides}></View>
                            <Text style={styles.h3}>Maquiagem</Text>
                        </View>
                        <View style={styles.areaSlides}>
                            <View style={styles.slides}></View>
                            <Text style={styles.h3}>Cabelos</Text>
                        </View>
                        <View style={styles.areaSlides}>
                            <View style={styles.slides}></View>
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
        marginBottom: 15,
        marginTop: 15
    },
    icon: {
        marginRight: 10,
    },
    input: {
        fontSize: 16,
        color: "#FFFFFFF"
    },

    itens: {
        width: "100%",
        height: 100,
        flexDirection: "row"
    },
    artigos: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    slides: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#ffffff",
    },
    areaSlides: {
        alignItems: "center"
    },
    h3: {
        color: "#ffffff"
    },
});
