
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQBXVZPHoQtWJUzTgQdwGsYC5iDyzOsrM",
  authDomain: "portafolio-backend-61b0e.firebaseapp.com",
  projectId: "portafolio-backend-61b0e",
  storageBucket: "portafolio-backend-61b0e.appspot.com",
  messagingSenderId: "108650769890",
  appId: "1:108650769890:web:00a7e732bee02f5f3b9dbb",
  measurementId: "G-5QVXKS1K8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()
export default db