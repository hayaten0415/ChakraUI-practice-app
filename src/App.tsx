import {
  ChakraProvider,
  Button,
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider>
    <Button colorScheme="teal">ボタン</Button>
  </ChakraProvider>
);
