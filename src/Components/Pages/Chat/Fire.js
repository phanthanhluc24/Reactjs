import { initializeApp } from "firebase/app";
import { getDatabase,ref,push,onValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAKPsNn7WyA_GwCb4t6wVR5NXufJpDaKyE",
  authDomain: "chat-6dd59.firebaseapp.com",
  databaseURL: "https://chat-6dd59-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-6dd59",
  storageBucket: "chat-6dd59.appspot.com",
  messagingSenderId: "17399298018",
  appId: "1:17399298018:web:6574075892e7d88f71abbb"
};


const app = initializeApp(firebaseConfig);
const database=getDatabase(app)
export { database,ref,push,onValue }
