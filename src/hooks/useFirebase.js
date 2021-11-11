import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import {
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut
} from 'firebase/auth';

initializeFirebase();
const useFirebase = () => {
	const [ user, setUser ] = useState({});
	// console.log(user);
	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();
	// google sign in
	const signInWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// The signed-in user info.
				const user = result.user;
				setUser(user);
				// console.log(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};
	// register with email and password
	const registerWithEmailAndPassword = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};
	// sign user with email & password
	const logInWithEmailAndPassword = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};
	// ovserver user presence
	useEffect(
		() => {
			const unsubscribe = onAuthStateChanged(auth, (user) => {
				if (user) {
					setUser(user);
				} else {
					setUser({});
				}
			});
			return () => unsubscribe;
		},
		[ auth ]
	);
	//  sign out
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				// An error happened.
			});
	};
	return {
		signInWithGoogle,
		registerWithEmailAndPassword,
		logInWithEmailAndPassword,
		user,
		logOut
	};
};

export default useFirebase;
