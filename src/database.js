import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1xRJ2s940I3UMiEonVsN5ZSSu7qDhdGI",
    authDomain: "chatapp-3e34d.firebaseapp.com",
    databaseURL: "https://chatapp-3e34d.firebaseio.com",
    projectId: "chatapp-3e34d",
    storageBucket: "chatapp-3e34d.appspot.com",
    messagingSenderId: "842260252788",
    appId: "1:842260252788:web:112d3141f2266177aa6921"
};

firebase.initializeApp(firebaseConfig);

export default firebase;