import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Vietmap from "./pages/rankings/Rankings.jsx";


import "./styles/index.css";
import KaAuto from "./pages/marketplace/MarketPlace.jsx";
const router = createBrowserRouter([
  {
    //Tất cả nằm trong này sẽ được kế thừa những thứ dùng chung như header , footer
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/KaAuto",
        element: <KaAuto />,
      },
      {
        path: "/Vietmap",
        element: <Vietmap />,
      },
     
     
    ],
  },
  //năm ngoài phạm vi này sé không thừa hưởng thứ gì
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
