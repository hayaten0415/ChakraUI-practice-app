import {
  ChakraProvider,
  Button,
} from "@chakra-ui/react"
import theme from './theme/theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Button colorScheme="teal">ボタン</Button>
  </ChakraProvider>
);
