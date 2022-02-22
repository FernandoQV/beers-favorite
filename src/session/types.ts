import {User, UserCredential} from "firebase/auth"

export enum typeStatusSession {
  init = "init",
  restaured = "restaured",
}
export interface IActionSession {
  signIn: () => Promise<User>
  signOut: () => Promise<void>
}

export interface IContextSession {
  user: IUser | null
  actions: IActionSession
  status: typeStatusSession
}
export type IUser = User
