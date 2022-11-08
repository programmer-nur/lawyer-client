// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANZiHKHhsu7Pq1IXvXoDFirrUnwFCC4Zg",
  authDomain: "lawyer-service-cb0ae.firebaseapp.com",
  projectId: "lawyer-service-cb0ae",
  storageBucket: "lawyer-service-cb0ae.appspot.com",
  messagingSenderId: "455130053660",
  appId: "1:455130053660:web:058295bef7562b3785b3d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;