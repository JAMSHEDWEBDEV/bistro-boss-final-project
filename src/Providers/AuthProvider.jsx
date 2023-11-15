import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig/firebase.config";

export const AuthContext = createContext(null);
 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // auth observer connect start 
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log('auth observer connected',currentUser);
        });
        return ()=>{
            return unSubscribe();
        }
    },[])

    // create user start 
    const createUser = (email,password)=>{
        setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password);
    }
//   signIn user create start 
   const signInUser = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
   }

//    google singnIn start 

  const googleSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }

  // update profile start 
  const userProfileUpdate = (name,photo) =>{
   return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }

//  logged out start 
  const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
  }


    const authInfo = {
         user,
         loading,
         createUser,
         signInUser,
         googleSignIn,
         logOut,
         userProfileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;