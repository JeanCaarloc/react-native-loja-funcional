import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";



export default function Screen() {
    return (
        <View style={styles.container}>
            <View style={styles.textbase}>
                <Text style={styles.h4}>Olá 👋, Sejam Bem-vindos ao Eu Quero Cosméticos,</Text>
                <Text style={styles.h5}>A sua loja de cosméticos feita com carinho para o público feminino. Nossa jornada começou com o desejo de oferecer produtos de beleza de alta qualidade que atendem às necessidades e desejos de cada mulher, seja ela amante de maquiagem, cuidados com a pele, ou buscando realçar sua beleza natural.</Text>
                <Text style={styles.h6}>Nosso objetivo é proporcionar uma experiência de compra única, oferecendo uma curadoria de produtos que não só embelezam, mas também cuidam de você. Acreditamos que cada cliente merece o melhor, por isso buscamos constantemente as melhores marcas e lançamentos do mercado, sempre pensando no que pode agregar ao seu bem-estar e autoestima.</Text>
                <Text style={styles.h6}>Qualidade é o nosso compromisso. Trabalhamos com cosméticos que passam por rigorosos testes de qualidade, garantindo que cada produto ofereça o máximo de eficácia e segurança. No Eu Quero Cosméticos, queremos que você se sinta confiante em cada escolha, sabendo que está investindo em produtos que realmente fazem a diferença.</Text>
                <Text style={styles.h6}>Seja bem-vinda à nossa loja, onde a sua beleza é celebrada e cuidada em cada detalhe!</Text>
            </View>
            <Text style={styles.titles}>Redes Sociais:</Text>
            <View style={styles.buttons}>
                <Link href="about" asChild>
                    <Pressable style={styles.likend}>
                        <Text style={styles.h1}>Instagram</Text>
                    </Pressable>
                </Link>
                <Link href="about" asChild>
                    <Pressable style={styles.likend}>
                        <Text style={styles.h2}>Facebook</Text>
                    </Pressable>
                </Link>
                <Link href="about" asChild>
                    <Pressable style={styles.likend}>
                        <Text style={styles.h3}>Twiter</Text>
                    </Pressable>
                </Link>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"flex-start",
        padding: 20
    },
    textbase:{
        alignItems:"baseline",

    },
    titles:{
        fontSize: 18,
        fontWeight: 'bold',
        alignItems:"baseline",
        marginBottom: 2    
    },
    likend: {
        width: 70,
        height: 22,
        borderWidth: 1,
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 10
    },
    h1: {
        color: "#f78998",
        fontWeight: 'bold',
        fontSize: 13
    },
    h2: {
        color: "#00c3ff",
        fontWeight: 'bold',
        fontSize: 13
    },
    h3: {
        color: "#ff9900",
        fontWeight: 'bold',
        fontSize: 13
    },
    buttons: {
        flexDirection: "row",
        paddingBottom: 30
    },
    h4: {
        fontSize: 18,
        marginBottom: 8  
    },
    h5: {
        fontSize: 15,
        marginBottom: 8  
    
  
    },
    h6: {
        fontSize: 15,
        marginBottom: 8
    },
})