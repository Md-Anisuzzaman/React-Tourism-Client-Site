import firebaseConfig from "./Firebase-config";
import { initializeApp } from "firebase/app";



const intializeFirebaseApp=()=>{
    initializeApp(firebaseConfig);
}

export default intializeFirebaseApp;