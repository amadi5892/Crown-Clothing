import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; 


const firebaseConfig = {
    apiKey: "AIzaSyBzMAJJTE1MetcGM_pRZBKZbDhOKkXMFtQ",
    authDomain: "crown-clothing-db-2f16d.firebaseapp.com",
    projectId: "crown-clothing-db-2f16d",
    storageBucket: "crown-clothing-db-2f16d.appspot.com",
    messagingSenderId: "913064935616",
    appId: "1:913064935616:web:338614c33f0c2c14fa6d25"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    promp: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);