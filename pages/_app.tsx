import type {AppProps} from "next/app"

import {ChakraProvider} from "@chakra-ui/react"

import {ProviderSession} from "@/session/provider"
import {themeBrand} from "@/theme"

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={themeBrand}>
      <ProviderSession>
        <Component {...pageProps} />
      </ProviderSession>
    </ChakraProvider>
  )
}

export default MyApp
