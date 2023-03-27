import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import App from './App'
import { Signup } from './pages/Signup/Signup'
import { Main } from './components/Main/Main'
import { Signin } from './pages/Signin/Signin'
import { Products } from './pages/Products/Products'
import Logout from './pages/Logout/Logout'
import { store } from './redux/store'
import { Cart } from './pages/Cart/Cart'
import { Favorites } from './pages/Favorites/Favorites'
import { User } from './pages/User/User'
import { AddNewProduct } from './pages/AddProduct/AddNewProduct'
import { DetailPageProduct } from './pages/DetailPageProduct/DetailPageProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      { path: 'signup', element: <Signup /> },
      { path: 'signin', element: <Signin /> },
      { path: 'logout', element: <Logout /> },
      { path: 'products', element: <Products /> },
      { path: 'cart', element: <Cart /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'user', element: <User /> },
      { path: 'addnewproduct', element: <AddNewProduct /> },
      { path: 'products/:id', element: <DetailPageProduct /> },
    ],
  },
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
