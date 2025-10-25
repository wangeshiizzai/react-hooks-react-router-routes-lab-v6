// Importing the NavBar component so we can show navigation links at the top
import NavBar from "../components/NavBar";

// Importing useRouteError — this helps us catch and show router errors
import { useRouteError } from "react-router-dom";

// Creating our ErrorPage component
function ErrorPage() {
  // useRouteError() gives us information about what went wrong in routing
  const error = useRouteError();

  // This prints the error in the browser console for developers to see
  console.log(error);

  // This is what will be shown on the screen if an error happens
  return (
    <>
      <header>
        {/* The navigation bar will still appear even if there’s an error */}
        <NavBar />
      </header>

      {/* A friendly message for the user when something goes wrong */}
      <h1>Oops! Looks like something went wrong.</h1>
    </>
  );
}

// Exporting ErrorPage so it can be used by the router or other components
export default ErrorPage;
