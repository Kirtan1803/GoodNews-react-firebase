
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDZqvgjkKr8K6nfLX9kI_FHIY5I4r_4Q2Q",
  authDomain: "goodnewsultron.firebaseapp.com",
  projectId: "goodnewsultron",
  storageBucket: "goodnewsultron.firebasestorage.app",
  messagingSenderId: "726806642658",
  appId: "1:726806642658:web:9e82bd2bf6852ec8ed83bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export let auth = getAuth(app)
export let db = getFirestore(app)



