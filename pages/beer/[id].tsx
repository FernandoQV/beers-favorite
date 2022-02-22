import {ParsedUrlQuery} from "querystring"

import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import React from "react"
import {Heading, Image, Stack, Text} from "@chakra-ui/react"

import apiBeers from "@/beer/apiBeer"
import {IBeer} from "@/beer/types"
interface Props {
  beer: any
}
const BeerPage: NextPage<Props> = ({beer}) => {
  if (!beer) return <Text>No se encontro cerveza</Text>

  return (
    <Stack direction={"row"}>
      <Image alt="" boxSize="550px" objectFit={"contain"} src={beer.image_url} />
      <Stack direction={"column"} spacing={2}>
        <Heading color="primary.500" fontSize={"2xl"} fontWeight={600}>
          {beer.name}
        </Heading>

        <Text color={"gray.600"}>{beer.description}</Text>
      </Stack>
    </Stack>
  )
}

interface IParams extends ParsedUrlQuery {
  id: string
}
export const getStaticProps: GetStaticProps = async (context) => {
  const {id} = context.params as IParams
  const beer = await apiBeers.getBeer(id).then((b) => b[0])

  return {
    props: {
      beer,
    },
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const beers = await apiBeers.getAll()
  const paths = beers.map((beer: IBeer) => ({
    params: {id: beer.id.toString()},
  }))

  return {
    paths,
    fallback: false,
  }
}
export default BeerPage
