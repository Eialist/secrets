import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import JaPage from './pages/JaPage.jsx';
import ParallaxPage from './pages/ParallaxPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
  </React.StrictMode>,
)
