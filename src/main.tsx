import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./components/homepage.tsx";
import { Notfoundpage } from "./components/notfoundpage.tsx";
import { Profilepage } from "./components/profile.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <Notfoundpage />,
  },
  {
    path: "/page",
    element: <Homepage />,
    children: [
      {
        path: "/page/:pageID",
        element: <Profilepage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
