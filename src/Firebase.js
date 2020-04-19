import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
   apiKey: "AIzaSyC_9VLIHFmJ2P2QT4WdAdx3DRXpaGO5Lp0",
    authDomain: "rhlys-972c4.firebaseapp.com",
    databaseURL: "https://rhlys-972c4.firebaseio.com",
    projectId: "rhlys-972c4",
    storageBucket: "rhlys-972c4.appspot.com",
    messagingSenderId: "1047670143444",

};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;



