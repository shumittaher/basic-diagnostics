import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';
import { useState, useEffect } from 'react';

initializeAuthentication()



const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const signInEmailAndPassword = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const createUserEmailAndPassword = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInWithGoogle = () => {
        setIsLoading(true)
        const googlePopUpProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googlePopUpProvider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false)
        );


    }
    return {
        user,
        error,
        signInWithGoogle,
        logOut,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        createUserEmailAndPassword,
        signInEmailAndPassword
    }

}

export default useFirebase
