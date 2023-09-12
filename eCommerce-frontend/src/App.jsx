import Home from "./features/components/home/Home";
import "./index.css";
import LoginPage from "./features/components/login/LoginPage";
import SignupPage from "./features/components/signup/SignupPage";
import CartPage from "./features/components/cart/cartPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutPage from "./features/components/checkout/CheckoutPage";
import ProductsDetailsPage from "./features/components/productDetails/ProductsDetailsPage";
import {Protected} from "./features/authentication/Auth/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <CheckoutPage />
      </Protected>
    ),
  },
  {
    path: '/product-detail/:id',
    element: <ProductsDetailsPage />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
