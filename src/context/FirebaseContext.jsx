import React, { useContext, createContext, useEffect,useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  limit,
  startAfter,
  orderBy,
  deleteDoc,doc
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  databaseURL: import.meta.env.VITE_databaseURL
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

const FirebaseContext = createContext({});

let lastDocument = null;

export const FirebaseProvider = ({ children }) => {
  const submitMessage = (username, email, message) => {
    addDoc(collection(firestore, "messages"), {
      time: Date.now(),
      username,
      email,
      message,
    });
  };

  

  
  
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const [user, setUser] = useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth, user=>{
      if(user) setUser(user)
      else setUser(null)
    })
  }, [user])
  const isUserLoggedIn = (user ? true : false);
  const logOut = async () => {
    try {
      await auth.signOut();
      console.log('Successfully logged out');
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  

  
  
  const getAllProjects = async()=>{
    const projRef = collection(firestore, 'projects')
    const q = query(projRef, orderBy('time'))
    const projs = await getDocs(q)
    let records = projs.docs.map(doc => ({...doc.data(), id:doc.id}) )
    return records
  }

  let [sideBarOpen, setSidebar] = useState(false)
  return (
    <FirebaseContext.Provider value={{sideBarOpen, setSidebar,getAllProjects,deleteProject,deleteMsg, logOut,signIn, submitMessage, submitProject,getProjects,isUserLoggedIn,getMessages }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
