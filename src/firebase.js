import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAgJlkM4OQ9xcNK_vvJV5CXMTwwBceyb_8",
    authDomain: "tinder-clone-firebase-9e4ee.firebaseapp.com",
    databaseURL: "https://tinder-clone-firebase-9e4ee.firebaseio.com",
    projectId: "tinder-clone-firebase-9e4ee",
    storageBucket: "tinder-clone-firebase-9e4ee.appspot.com",
    messagingSenderId: "677107483303",
    appId: "1:677107483303:web:3ceaa20770b533c5e95182",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
