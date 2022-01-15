
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBvPEw1BQbeJf-v9cgBsivNh_uWz0pelvI",
  authDomain: "next-crud-62c68.firebaseapp.com",
  projectId: "next-crud-62c68",
  storageBucket: "next-crud-62c68.appspot.com",
  messagingSenderId: "61903057554",
  appId: "1:61903057554:web:39c9915098c46101426c4b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);