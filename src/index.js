import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Signup } from './pages/Signup/Signup'
import { Main } from './components/Main/Main'
import { Signin } from './pages/Signin/Signin'
import { Products } from './pages/Products/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      { path: 'signup', element: <Signup /> },
      { path: 'signin', element: <Signin /> },
      { path: 'products', element: <Products /> },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
