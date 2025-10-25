// Importing all the page components
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";

// All the routes for our app
const routes = [
  {
    path: "/", // when you go to http://localhost:3000/
    element: <Home />, // show the Home page
    errorElement: <ErrorPage />, // show this if something breaks
  },
  {
    path: "/directors", // when you go to /directors
    element: <Directors />, // show the Directors page
    errorElement: <ErrorPage />,
  },
  {
    path: "/actors", // when you go to /actors
    element: <Actors />, // show the Actors page
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id", // when you go to /movie/1 or /movie/2 etc.
    element: <Movie />, // show the Movie page
    errorElement: <ErrorPage />,
  },
];

// Export so the app can use it
export default routes;
