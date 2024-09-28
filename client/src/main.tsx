import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import Rental from "./components/Rental";
import Calendar from "./components/Calendar"
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "/edit/:id",
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Record />,
      },
    ],
  },
  {
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Record />,
      },
    ],
  },
  {
    path: "/rent",
    element: <App />,
    children: [
      {
        path: "/rent",
        element: <Rental />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  //StrictMode causes things to print twice 
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
