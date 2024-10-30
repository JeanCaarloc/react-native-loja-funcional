import { Text, View, StyleSheet, ImageBackground, Pressable, TextInput, StatusBar } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import firebase from "../../firebase"

export default function Screen() {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")

    const router = useRouter()

    const handle = async () =>{
        const Usuario = await firebase.firestore().collection("Pessoas").add({
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf
        })

        alert(`Usuario criado ${Usuario.id}`)
    }

    const image = { uri: "https://i.pinimg.com/736x/d5/d7/a5/d5d7a5f7fa0eaa70aa19fe826452a6f9.jpg" };
    return (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay} />
            <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                <View style={styles.form}>
                    <Text style={styles.title}>Criar Usuario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="nome"
                        placeholderTextColor={"#ffffff"}
                        onChangeText={text => setNome(text)}
                        value={nome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="sobrenome"
                        placeholderTextColor={"#ffffff"}
                        onChangeText={text => setSobrenome(text)}
                        value={sobrenome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="cpf"
                        placeholderTextColor={"#ffffff"}
                        onChangeText={text => setCpf(text)}
                        value={cpf}
                    />
                </View>
                <View style={styles.buttons}>
                    <Pressable style={styles.button} onPress={ handle }
                        
                        >
                        <Text style={styles.buttonText}>Criar</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => router.push("/lista")}>
                        <Text style={styles.buttonText}>Ver listas</Text>
                    </Pressable>


                </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 100,
        gap: 40
      },
      form: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#cfbb78',
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
      },
      input: {
        width: '65%',
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#cfbb78',
        borderRadius: 5,
        color:'#ffffff'
    
       
      },
      buttons: {
        width: '65%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button: {
        backgroundColor: '#714246',
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
        justifyContent: "center",
        borderRadius: 5,
        alignItems: 'center',
        width: "35%",
        aspectRatio: 2.10
      },
      buttonText: {
        color: '#cfbb78',
        fontSize: 16,
      }
    });
    

