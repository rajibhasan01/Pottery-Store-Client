import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initilizeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initilizeFirebase;