import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import JaPage from './pages/JaPage';
import ParallaxPage from './pages/ParallaxPage';


const router = createBrowserRouter([
  {
    basename: "/secrets/",
    path: "/secrets/",
    element: <App />,
    children: [
      {
        path: "/secrets/ja", 
        element: <JaPage />
      },
      {
        path: "/secrets/parallax",
        element: <ParallaxPage />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
