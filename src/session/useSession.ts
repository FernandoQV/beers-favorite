import {useContext} from "react"

import {contextSession} from "./provider"

const SessionContext = () => useContext(contextSession)

export default SessionContext
