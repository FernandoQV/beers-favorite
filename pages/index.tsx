import React from "react"
import {GetStaticProps, NextPage} from "next"
import {Button, Heading, Link, Stack} from "@chakra-ui/react"
import NextLink from "next/link"

import {IBeer} from "@/beer/types"
import useSession from "@/session/useSession"
import {typeStatusSession} from "@/session/types"
import apiBeers from "@/beer/apiBeer"
import ListBeer from "@/beer/components/ListBeer"

interface Props {
  beers: IBeer[]
}
const Home: NextPage<Props> = ({beers}) => {
  const {user, status, actions} = useSession()

  const logout = () => {
    actions.signOut()
  }

  return (
    <Stack
      alignItems="center"
      direction={"column"}
      margin={"0 auto"}
      maxWidth="container.lg"
      spacing={8}
      width={"full"}
    >
      <Stack alignItems="center" direction={"row"} justifyContent="space-between" width={"full"}>
        <Heading color="red.300">Hola app</Heading>
        {user ? (
          <Button colorScheme={"primary"} variant="outline" onClick={() => logout}>
            Cerrar session
          </Button>
        ) : status === typeStatusSession.init ? (
          <span>cargadso</span>
        ) : (
          <NextLink href={"/auth/login"}>
            <Button as={Link} colorScheme={"primary"}>
              Login
            </Button>
          </NextLink>
        )}
      </Stack>
      <ListBeer beers={beers} />
    </Stack>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const beers = await apiBeers.getAll()

  return {
    props: {
      beers,
    },
  }
}
export default Home
