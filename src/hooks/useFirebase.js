import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import {
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	updateProfile,
	signOut
} from 'firebase/auth';
import useToast from './useToast';

initializeFirebase();
const useFirebase = () => {
	const [ user, setUser ] = useState({});
	const [admin, setAdmin] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { notify } = useToast();;
	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();
	// google sign in
	const signInWithGoogle = (location, history) => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// The signed-in user info.
				const userInfo = result.user;
				setUser(userInfo);
				saveUserToDb(userInfo.displayName, userInfo.email, 'PUT');
				const destination = location?.state?.from || '/';
				history.push(destination);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			}).finally(() => setIsLoading(false))
	};
	// register with email and password
	const registerWithEmailAndPassword = (email, password, name, location, history) => {
				setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
			const newUser = { displayName: name };
				setUser(newUser);
				setUserName(name);
				saveUserToDb(name,email, 'POST');
					const destination = location?.state?.from || '/';
					notify('success', 'Account created successfully');
					setTimeout(() => {
						history.replace(destination);
					}, 2000);
				})
			.catch((error) => {
				const errorMessage = error.message;
				notify('error',errorMessage);
			}).finally(() => setIsLoading(false))
	};
	// sign user with email & password
	const logInWithEmailAndPassword = (email, password, location, history) => {
				setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
					const destination = location?.state?.from || '/';
					notify('success', 'Login Successfull');
					setTimeout(() => {
						history.replace(destination);
					}, 2000);
				
			})
			.catch((error) => {
				const errorMessage = error.message;
				notify('error', errorMessage);
			}).finally(() => setIsLoading(false))
	};
	// set user name
	const setUserName = (name) => {
	updateProfile(auth.currentUser, {
		displayName: name
	}).then(() => {
  // Profile updated!

	}).catch((error) => {
  // An error occurred
  // ...
	});
	}
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
	// find admin
	useEffect(()=>{
		const url=`https://frozen-temple-09204.herokuapp.com/admin/${user.email}`
		fetch(url).then(res=>res.json()).then(data=> {
			const admin = data.isAdmin;
			setAdmin(admin);
		})
	},[user.email])
	// save user to db
	const saveUserToDb = (displayName, email, method) => {
		const userinfo = {	displayName, email, };
		const url = 'https://frozen-temple-09204.herokuapp.com/users'
		fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userinfo)
		})
	}
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
		admin,
		signInWithGoogle,
		registerWithEmailAndPassword,
		logInWithEmailAndPassword,
		user,
		logOut
	};
};

export default useFirebase;
