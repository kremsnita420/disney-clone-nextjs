import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCjhJggGwOUxhKYz3iUyN2cX23BD1DUnhs",
    authDomain: "disney-clone-4902a.firebaseapp.com",
    projectId: "disney-clone-4902a",
    storageBucket: "disney-clone-4902a.appspot.com",
    messagingSenderId: "744176779974",
    appId: "1:744176779974:web:013bd65aacf2e150b44dc7"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = app.firestore()

export { db }