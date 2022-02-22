import {LinkBox, Stack, Icon, LinkOverlay, Heading, Image, Text, GridItem} from "@chakra-ui/react"
import React from "react"
import {FaHeart} from "react-icons/fa"
import NextLink from "next/link"

import {IBeer} from "../types"
interface Props {
  beer: IBeer
}
const CardBeer: React.FC<Props> = ({beer}) => {
  return (
    <LinkBox>
      <GridItem
        _hover={{boxShadow: "lg", bgColor: "gray.50"}}
        borderRadius="lg"
        boxShadow="md"
        height={"full"}
      >
        <Stack
          alignItems={"center"}
          direction={"column"}
          padding={8}
          position={"relative"}
          spacing={4}
          width="full"
        >
          <Icon
            _hover={{width: 8, height: 8}}
            as={FaHeart}
            color="red.500"
            height={4}
            position="absolute"
            right={8}
            top={8}
            width={4}
          />
          <Image alt={"Image Beer"} boxSize={"150px"} objectFit={"contain"} src={beer.image_url} />
          <Stack direction={"column"} spacing={2}>
            <NextLink passHref href={`/beer/${beer.id}`}>
              <LinkOverlay>
                <Heading color="primary.500" fontSize={"2xl"} fontWeight={600}>
                  {beer.name}
                </Heading>
              </LinkOverlay>
            </NextLink>

            <Text noOfLines={3}>{beer.description}</Text>
          </Stack>
        </Stack>
      </GridItem>
    </LinkBox>
  )
}

export default CardBeer
