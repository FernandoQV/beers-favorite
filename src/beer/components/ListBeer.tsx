import {SimpleGrid, SimpleGridProps} from "@chakra-ui/react"
import React from "react"

import {IBeer} from "../types"

import CardBeer from "./CardBeer"
interface Props extends SimpleGridProps {
  beers: IBeer[]
}
const ListBeer: React.FC<Props> = ({beers, ...rest}) => {
  return (
    <SimpleGrid {...rest} gap={8} minChildWidth={"250px"} width="full">
      {beers.map((beer) => (
        <CardBeer key={beer.id} beer={beer} />
      ))}
    </SimpleGrid>
  )
}

export default ListBeer
