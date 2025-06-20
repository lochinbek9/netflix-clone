
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createBrowserRouter } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCu_7cLzQwa90v3CC7OJiYHahUalovLlac",
  authDomain: "netflix-clone-2fd4d.firebaseapp.com",
  projectId: "netflix-clone-2fd4d",
  storageBucket: "netflix-clone-2fd4d.firebasestorage.app",
  messagingSenderId: "1006194756500",
  appId: "1:1006194756500:web:040787ea9770914d2a9d81",
  measurementId: "G-LC4VL130D8"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app) 

const signup = async (name, email, password) =>{
    try{
        const res =   await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            EmailAuthProvider: "local",
            email,
        })
    } catch(error){
        console.log(error)
        alert(error);
        toast.error(error.code.split("/")[1].split("-").join(" ")); 
    }
}

const login = async (email, password) =>{
    try{
        await signInWithEmailAndPassword(auth, email, password)
    } catch(error){
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}   

const logout = () =>{
    signOut(auth)
}

export {auth, db, login,  signup, logout }