import {Button, Container, Heading, Stack, Text} from "@chakra-ui/react"
import {User} from "@firebase/auth"
import {useRouter} from "next/router"
import React from "react"

import {SessionContext} from "../provider"
import {typeStatusSession} from "../types"

const LoginScreen: React.FC = () => {
  const {user, status, actions} = SessionContext()
  const router = useRouter()
  const handleLogin = () => {
    actions.signIn().then((user) => {
      if (user) return router.push("/")
    })
  }

  return (
    <Container maxWidth={"container.sm"}>
      <Stack direction={"column"} padding={4} width="full">
        <Heading>Bienvenido a Beers, por favor ingresa a tu cuenta</Heading>
        {status === typeStatusSession.init && <Text>init</Text>}
        {status === typeStatusSession.restaured && (
          <Button colorScheme={"primary"} onClick={handleLogin}>
            Login
          </Button>
        )}
      </Stack>
    </Container>
  )
}

export default LoginScreen
