import {onAuthStateChanged, signInWithPopup, User} from "firebase/auth"

import {auth, provider} from "@/service/connection"
const apiSession = {
  signIn: (): Promise<User> => signInWithPopup(auth, provider.google).then((u) => u.user),
  signOut: () => auth.signOut(),
  onChangeSession: (callback: any) => onAuthStateChanged(auth, callback),
}

export default apiSession
