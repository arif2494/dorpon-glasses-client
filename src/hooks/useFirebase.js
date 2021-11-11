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
	const [isLoading, setIsLoading] = useState(true);
	// console.log(user);
	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();
	// google sign in
	const signInWithGoogle = (location, history) => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// The signed-in user info.
				const user = result.user;
				setUser(user);
				// console.log(user);
				const destination = location?.state?.from || '/';
				history.push(destination);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			}).finally(() => setIsLoading(false))
	};
	// register with email and password
	const registerWithEmailAndPassword = (email, password) => {
				setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			}).finally(() => setIsLoading(false))
	};
	// sign user with email & password
	const logInWithEmailAndPassword = (email, password) => {
				setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			}).finally(() => setIsLoading(false))
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
						setIsLoading(false);
			});
			return () => unsubscribe;
		},
		[ auth ]
	);
	//  sign out
	const logOut = () => {
				setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				// An error happened.
			}).finally(() => setIsLoading(false))
	};
	return {
		isLoading,
		signInWithGoogle,
		registerWithEmailAndPassword,
		logInWithEmailAndPassword,
		user,
		logOut
	};
};

export default useFirebase;
