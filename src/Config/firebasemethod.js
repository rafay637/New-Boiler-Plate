import app from "./firebaseconfig";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

const auth = getAuth(app);
const database = getDatabase(app);
let signUpUser = (obj) => {
    let { email, password } = obj;
    return new Promise((resolve, reject) => {
        // === this "then" will give the status of Authentication. ===
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // user successfully registerd in authentication
                const user = userCredential.user;
                const refrence = ref(database, `users/${user.uid}`);
                obj.id = user.uid;
                set(refrence, obj)
                    // === this "then" will give the status of database function
                    .then(() => {
                        // this "resolve" is our custom message which will show in signup page "then"

                        // this "resolve" is our custom message which will show in signup page "then"
                        resolve("User Created Successfully and send to database");
                    })
                    .catch((errr) => {
                        reject(errr);
                    });
            })
            .catch((err) => {
                reject(err);
            });
    });
};

let Signout = () => {
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                resolve("user loggedout");
            })
            .catch((error) => {
                // An error happened.
                reject(error);
            });
    });
};

let LoginUser = (obj) => {
    let { email, password } = obj;
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                const reference = ref(database, `users/${user.uid}`);
                onValue(reference, (e) => {
                    let status = e.exists();
                    console.log(status);
                    if (status) {
                        resolve(e.val());
                    } else {
                        reject("Data Not Found :(");
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                reject(errorMessage);
            });
    });
};

let checkUser = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                resolve(uid)
                // ...
            } else {
                reject('no User Login')
                // User is signed out
                // ...
            }
        });
    });
};

export { signUpUser, LoginUser, Signout, database, checkUser };
