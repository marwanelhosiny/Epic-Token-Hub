import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projectstudy from "./more on section/projectstudy";
import Projectexecution from "./more on section/Projectexecution";
import Handover from "./more on section/Handover";

const router = createBrowserRouter([
  {
    path: "*",
    element: <h1 className="text-center">Page Not Found</h1>,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project_study",
    element: <Projectstudy />,
  },
  {
    path: "/project_execution",
    element: <Projectexecution />,
  },
  {
    path: "/handover_the_project",
    element: <Handover />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
