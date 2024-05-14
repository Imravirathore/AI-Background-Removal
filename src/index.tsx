import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import theme from './theme'
import Test from './components/Test';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider theme={theme}>
    {/* <App /> */}
    <Test/>
  </ChakraProvider>
);

