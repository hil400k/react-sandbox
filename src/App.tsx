import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blank from './pages/Blank';
import Root from './pages/Root';
import Error from './pages/Error';

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

function App() {
  return (
    <>
      <RouterProvider router={router} />
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
