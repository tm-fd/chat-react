import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



!firebase.apps.length ? firebase.initializeApp(
    {
        apiKey: "AIzaSyDkkTBT2q-U270Sipv2PYxW5PAXgAfrCF4",
        authDomain: "chat-react-b7832.firebaseapp.com",
        projectId: "chat-react-b7832",
        storageBucket: "chat-react-b7832.appspot.com",
        messagingSenderId: "882815537629",
        appId: "1:882815537629:web:dc841e9e07d11af2b06634"
      }
) : firebase.app()



export const auth = firebase.auth();
export const firestore = firebase.firestore()