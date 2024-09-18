import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Dashboard from './routes/Dashboard/index.tsx';

import './index.css';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: 'Circular Std',
      },
    }),
  },
});

const router = createBrowserRouter([
  {
    path: '*',
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <main className="h-screen w-screen">
        <RouterProvider router={router} />
      </main>
    </ChakraProvider>
  </StrictMode>,
);
