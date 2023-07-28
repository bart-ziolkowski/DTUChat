import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlKbeKw2mOkLOw82xBcqwM0PsYkp4-eps",
  authDomain: "dtu-chat.firebaseapp.com",
  projectId: "dtu-chat",
  storageBucket: "dtu-chat.appspot.com",
  messagingSenderId: "890600852866",
  appId: "1:890600852866:web:b963845b56ef85eac0139b",
  measurementId: "G-9QSMPLH86P",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
