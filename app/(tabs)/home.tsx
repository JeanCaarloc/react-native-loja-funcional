import { Text, View, StyleSheet, TextInput, SafeAreaView, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { BannerItem } from "../../components/banner";
import { getAllBanners } from "../../services/banners";

export default function Screen() {

    // Aqui você chama a função diretamente para obter o array
    const banners = getAllBanners();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.pesquisa}>
                <FontAwesome name="search" size={20} color="gray" style={styles.icon} />
                <TextInput
                    placeholder="Buscar..."
                    style={styles.input}
                />
            </View>

            <View style={styles.banner}>
                <FlatList
                    data={banners}  // Agora, banners é um array
                    renderItem={({ item }) => <BannerItem data={item} />}
                    keyExtractor={item => item.id.toString()}
                    style={styles.flatbanner}
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
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
    },
    banner: {
        width: "100%",
        height: 300,
        
    },
    flatbanner: {},
});
