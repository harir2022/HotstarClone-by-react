// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth} from "firebase/auth";
import { GoogleAuthProvider} from "firebase/auth";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyl8MjvFWu9ws_AIEg7UJ8rt9nrdmt0C4",
  authDomain: "disneyclone-362ac.firebaseapp.com",
  projectId: "disneyclone-362ac",
  storageBucket: "disneyclone-362ac.appspot.com",
  messagingSenderId: "1033334839123",
  appId: "1:1033334839123:web:a51782695b21e0def1b3a6",
  measurementId: "G-JYTZ297MS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth=getAuth();
const provider =new GoogleAuthProvider();
const storage = getStorage();

export {auth,provider,storage};
export default db;

