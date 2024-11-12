import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

let firebaseConfig = {
    apiKey: "AIzaSyCTqNf6DQVPhYIRS8gWCfCd9vNL5FhzkgQ",
    authDomain: "eu-quero-cosmeticos.firebaseapp.com",
    projectId: "eu-quero-cosmeticos",
    storageBucket: "eu-quero-cosmeticos.appspot.com",
    messagingSenderId: "552865472053",
    appId: "1:552865472053:web:9493b617fc95b2bc579b7c"
};

if (!firebase.apps.length) {
    console.log(`Conectando... ${firebase.apps.length}`)    
    firebase.initializeApp(firebaseConfig)
    console.log(`Conectando: ${firebase.apps.length}`)
}

const db = firebase.firestore();
export { db, firebase };