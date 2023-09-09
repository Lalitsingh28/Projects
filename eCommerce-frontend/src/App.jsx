import Home from "./features/components/home/Home"
import './index.css'
import LoginPage from "./features/components/login/LoginPage"
import SignupPage from "./features/components/signup/SignupPage"
import CartPage from "./features/components/cart/cartPage"
import * as React from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "./features/counter/Counter"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CheckoutPage from "./features/components/checkout/CheckoutPage"
import ProductsDetailsPage from "./features/components/productDetails/ProductsDetailsPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage/>,
  },
  {
    path:"/product-details",
    element: <ProductsDetailsPage/>
  }
]);
function App() {

  return (
    <>
      {/* <Home></Home> */}
      {/* <LoginPage></LoginPage> */}
      {/* <SignupPage></SignupPage> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
