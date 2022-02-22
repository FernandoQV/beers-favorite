import {FirebaseApp, initializeApp} from "firebase/app"
import {getFirestore, Firestore} from "firebase/firestore"
import {getAuth, Auth, GoogleAuthProvider} from "firebase/auth"
//import {getAnalytics} from "firebase/analytics"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
}

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig)
const firestore: Firestore = getFirestore()
const auth: Auth = getAuth(app)
const provider = {
  google: new GoogleAuthProvider(),
}

export {firestore, auth, provider}
export default app

//const analytics = getAnalytics(app)
