import {initializeApp} from "firebase/app";
import {getFirestore,} from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getFunctions } from 'firebase/functions';
import { ReCaptchaV3Provider, initializeAppCheck } from "firebase/app-check";



const firebaseConfig = {
  apiKey: process.env.FIREBASE_TOKEN,
  authDomain: "portafolio-backend-61b0e.firebaseapp.com",
  projectId: "portafolio-backend-61b0e",
  storageBucket: "portafolio-backend-61b0e.appspot.com",
  messagingSenderId: "108650769890",
  appId: "1:108650769890:web:00a7e732bee02f5f3b9dbb",
  measurementId: "G-5QVXKS1K8P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const appCheck = initializeAppCheck(app, { provider: new ReCaptchaV3Provider('6Ldo2MweAAAAAMjgZr_Kv6UriWHWXKB-GidK-C18') });