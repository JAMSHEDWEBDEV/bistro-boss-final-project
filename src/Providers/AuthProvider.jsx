import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    // auth observer connect start 
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            if(currentUser){
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt',userInfo)
                .then(res =>{
                  if(res.data.token){
                    localStorage.setItem('access-token',res.data.token);
                  }
                })
            }else{
              // do something
              localStorage.removeItem('access-token');
            }
            setLoading(false);
            console.log('auth observer connected',currentUser);
        });
        return ()=>{
            return unSubscribe();
        }
    },[axiosPublic])

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

//    google signIn start 

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