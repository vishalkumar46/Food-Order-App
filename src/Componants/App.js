import React, { useContext, useState } from "react";
import ReactDom from "react-dom/client";
import { Header } from "./Header";
import { LayoutContainer } from "./LayoutContainer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { ContactUS } from "./ContactUS";
import { ErrorPage } from "./ErrorPage";
import { Resturent } from "./Resturent";
import { lazy, Suspense } from "react";
import { UserContext } from "./UserContext";
import { Provider } from "react-redux";
import { appStore } from "../utils/Store/appStore";
import { Cart } from "./Cart";

const About = lazy(() => import("./About"));
const AppLayout = () => {
  const { loggedInUser } = useContext(UserContext);
  const [name, setName] = useState(loggedInUser);
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: name, setName: setName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appLaylout = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LayoutContainer />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUS />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resturent/:resID",
        element: <Resturent />,
      },
    ],
  },
]);
const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appLaylout} />);
