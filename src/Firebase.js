import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "simplelogin-298a3.firebaseapp.com",
    projectId: "simplelogin-298a3",
    storageBucket: "simplelogin-298a3.appspot.com",
    messagingSenderId: "21285123901",
    appId: "1:21285123901:web:25e23a3ab759fb63c8f754"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase