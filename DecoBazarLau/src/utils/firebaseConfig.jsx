import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSn-_4iR2Qz4TcNczjpeXQ1uq-nM6L_0A",
  authDomain: "decobazarlau-7f1b1.firebaseapp.com",
  projectId: "decobazarlau-7f1b1",
  storageBucket: "decobazarlau-7f1b1.appspot.com",
  messagingSenderId: "169353783093",
  appId: "1:169353783093:web:5f8b1469a91fea7f1b8e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db


