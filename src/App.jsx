import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseComponent from "./components/base/base.component";
import Cart from "./components/cart/cart.component";
import Home from "./components/home/home.component";
import Login from "./components/login/login.component";
import ErrorPage from "./components/ErrorPage/errorPage";
import Products from "./components/home/products/products.component";
import SignUp from "./components/signUp/signUp";
import { useState } from "react";
import AuthContext from "./context/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseComponent />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App = () => {
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setAuthState(JSON.parse(isLoggedIn));
    }
  }, [authState]);

  return (
    <>
      <AuthContext.Provider value={[authState, setAuthState]}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>
    </>
  );
};

export default App;
