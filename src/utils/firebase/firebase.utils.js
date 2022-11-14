import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; 
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';


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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());


  //if user data does not exists
  //create / set the document with the data from userAuth in my collection
  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  //if user data exists
  //return userDocRef
  return userDocRef;


}