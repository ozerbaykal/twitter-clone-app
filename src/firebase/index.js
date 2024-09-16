
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyBIpm7bFscW6qy1k2wCLCSrVzN2G37bsuc",
  authDomain: "twitter-clone-c591c.firebaseapp.com",
  projectId: "twitter-clone-c591c",
  storageBucket: "twitter-clone-c591c.appspot.com",
  messagingSenderId: "628797440356",
  appId: "1:628797440356:web:4f7707e2d02da02eae3a71"
};

const app = initializeApp(firebaseConfig);
//  auth referansını al
export const auth =getAuth(app);

//google sağlayıcısının kur
  export  const provider = new GoogleAuthProvider();
 //veri tabanının referansını al
  export const db =getFirestore(app)
  //storage referenasını al
  export const storage =getStorage(app);