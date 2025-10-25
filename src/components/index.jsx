// Importing tools from react-router-dom that help us set up routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Importing the routes we defined in a separate file
import routes from "./routes";
// Importing React and ReactDOM so we can render our app
import React from "react";
import ReactDOM from "react-dom/client";

// Creating a router using the routes we made
const router = createBrowserRouter(routes);

// Finding the HTML element with id="root" where our app will show
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the RouterProvider, which makes our routes work in the app
root.render(<RouterProvider router={router} />);
