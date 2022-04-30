import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom'

import theme from "./theme/theme";
import { Router } from './router/Router';
import { LoginUserProvider } from './providers/LoginUserProvider';

export const App = () => (
  <ChakraProvider theme={theme}>
    <LoginUserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LoginUserProvider>
  </ChakraProvider>
);
