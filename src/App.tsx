import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blank from './pages/Blank';
import Root from './pages/Root';
import Error from './pages/Error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'blank',
        element: <Blank />
      }
    ]
  }
])

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>

    // <div className="App">
    //   <header className="App-header">
    //
    //   </header>
    //   <main>
    //
    //   </main>
    // </div>
  );
}

export default App;
