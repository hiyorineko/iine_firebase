import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";

const config = {
    apiKey: "XXXXXXXXXX",
    authDomain: "XXXXXXXXXX.firebaseapp.com",
    databaseURL: "https://XXXXXXXXXX.firebaseio.com",
    projectId: "XXXXXXXXXX",
    storageBucket: "",
    messagingSenderId: "XXXXXXXXXX",
    appId: "XXXXXXXXXX"
};
export default {
    init() {
        firebase.initializeApp(config);
    }
  }

