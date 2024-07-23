// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId: ,
  appId: ,
  measurementId: 
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase App initialized:", app.name);

export { db };