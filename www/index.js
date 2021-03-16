// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqSvvfp4SSycrWWS5YPaTkk_RZiYd9ZmM",
    authDomain: "comp-324-story-game.firebaseapp.com",
    databaseURL: "https://comp-324-story-game-default-rtdb.firebaseio.com",
    projectId: "comp-324-story-game",
    storageBucket: "comp-324-story-game.appspot.com",
    messagingSenderId: "257537359537",
    appId: "1:257537359537:web:0257937760a7a0268f6c90",
    measurementId: "G-M8XW1WKDGT"
};
firebase.initializeApp(firebaseConfig);

function loginBtnClick() {
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredetial) => {
        var user = userCredetial.user;
        // ...
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function signupBtnClick() {
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        var user = userCredential.user;
        // ...
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function logoutBtnClick() {
    firebase.auth().signOut().then(() => {
        console.log("Logout Successful!");
    }).catch((error) => {
        console.log("An error has occurred: " + error.message);
    });
}