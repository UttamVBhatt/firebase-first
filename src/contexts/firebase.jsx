import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCoLM6RPJ0MhNXqMXI5-wBSNkN9S6ygrKM",
  authDomain: "bookify-eac23.firebaseapp.com",
  projectId: "bookify-eac23",
  storageBucket: "bookify-eac23.appspot.com",
  messagingSenderId: "815404262646",
  appId: "1:815404262646:web:0208a46899102f4af438d7",
};

export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const fireStore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const useFireBase = () => useContext(FirebaseContext);

const googleProvider = new GoogleAuthProvider();

const listAllBooks = () => getDocs(collection(fireStore, "books"));

const getImageURL = async (path) => await getDownloadURL(ref(storage, path));

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(function () {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const isLoggedIn = user ? true : false;

  const getBookById = async (id) => {
    const bookRef = doc(fireStore, "books", id);
    const result = await getDoc(bookRef);
    return result;
  };

  const signUpUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signInWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const handleCreateNewListing = async (name, isbn, price, coverPic) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${coverPic}`);

    const uploadedResult = await uploadBytes(imageRef, coverPic);

    return await addDoc(collection(fireStore, "books"), {
      name,
      isbn,
      price,
      imageURL: uploadedResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signInWithGoogle,
        isLoggedIn,
        handleCreateNewListing,
        listAllBooks,
        getImageURL,
        getBookById,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
