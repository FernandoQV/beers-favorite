import {createContext, useContext, useEffect, useState} from "react"

import apiSession from "./api"
import {IActionSession, IContextSession, IUser, typeStatusSession} from "./types"

export const contextSession = createContext<IContextSession>({} as IContextSession)

interface Props {
  children: JSX.Element
}
const ProviderSession = ({children}: Props) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [status, setStatus] = useState<typeStatusSession>(typeStatusSession.init)

  const actions: IActionSession = {signIn: apiSession.signIn, signOut: apiSession.signOut}

  useEffect(() => {
    apiSession.onChangeSession((user: IUser | null) => {
      setUser(user)
      setStatus(typeStatusSession.restaured)
    })
  }, [])

  return (
    <contextSession.Provider value={{user, actions, status}}>{children}</contextSession.Provider>
  )
}

export {ProviderSession}
