
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCilNwHF34NMyFZrekzi52wYFttguQO1E8",
  authDomain: "bartalap-627ca.firebaseapp.com",
  projectId: "bartalap-627ca",
  storageBucket: "bartalap-627ca.appspot.com",
  messagingSenderId: "555247445124",
  appId: "1:555247445124:web:0eabf874ea13999337ced1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();