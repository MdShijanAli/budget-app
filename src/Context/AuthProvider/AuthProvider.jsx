import { createContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/ErrorPage/Loading';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged,  signOut, sendPasswordResetEmail } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app)


const AuthProvider = ({ children }) => {
   
    const [user, setUser] = useState(null);
    console.log("user", user?.email)
    const [loading, setLoading] = useState(true);


    // create user with email and password

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('greenTechToken')
        return signOut(auth);

    }

    const passResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside changed', currentUser);
            setUser(currentUser);


            setLoading(false);

        });
        return () => {
            unsubscribe();
        }



    }, [])



    
    const { data: users = [], isLoading} = useQuery ({
      queryKey: ['users'],
      queryFn: async () => {
          try {
              const res = await fetch('https://budget-app-server.vercel.app/users');
              const data = await res.json();
              return data;
          }
          catch (error) {
              console.log(error);
          }
      }
    })

    /* if (isLoading) {
        return <Loading></Loading>
    } */
    
    // console.log(users)


    // const UserEmail = localStorage.getItem("UserEmail");
    // console.log(UserEmail)

   

    const UserInfo = users.find(usr => usr?.email == user?.email);
    // console.log("UserInfo", UserInfo)

   






    const authInfo = {
        createUser,
        signIn,
        UserInfo,
        user,
        users,
        updateUserProfile,
        logOut,
        passResetEmail,
        loading,
        setLoading

        


    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};



export default AuthProvider;