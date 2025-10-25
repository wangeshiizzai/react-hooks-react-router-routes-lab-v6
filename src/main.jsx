import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

// 1️⃣ Create the router using your routes array
const router = createBrowserRouter(routes);

// 2️⃣ Render the router inside the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
