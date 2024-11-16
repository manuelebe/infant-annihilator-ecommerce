import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB1AIEsP--LttPvuBBSJd9nQr-Xhpo8IQk",
  authDomain: "ia-commerce-2b51b.firebaseapp.com",
  projectId: "ia-commerce-2b51b",
  storageBucket: "ia-commerce-2b51b.firebasestorage.app",
  messagingSenderId: "1082039036312",
  appId: "1:1082039036312:web:5ce11b13fb56cf6f8fa3ed"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db