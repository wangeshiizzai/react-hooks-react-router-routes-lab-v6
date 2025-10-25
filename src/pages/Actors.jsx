// Importing React hooks useEffect and useState for fetching and storing data
import { useEffect, useState } from "react";
// Importing the NavBar component to show at the top
import NavBar from "../components/NavBar";

function Actors() {
  // Making a state called "actors" that starts as an empty list
  const [actors, setActors] = useState([]);

  // useEffect runs when the page first loads
  // It fetches the list of actors from our local server
  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json()) // Turn the response into JSON
      .then((data) => setActors(data)) // Save that data into our state
      .catch((error) => console.error(error)); // If something goes wrong, show it in the console
  }, []); // Empty array [] means it runs only once when the page starts

  // Mapping (looping) through the actors list and creating HTML for each actor
  const actorList = actors.map((actor) => {
    return (
      <div key={actor.id}>
        <article>
          <h2>{actor.name}</h2>
          <ul>
            {/* Looping through each actor's movie list */}
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      </div>
    );
  });

  // Returning what we want to show on the page
  return (
    <>
      <header>
        {/* The navigation bar goes here */}
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {/* Displaying the list of actors and their movies */}
        {actorList}
      </main>
    </>
  );
}

// Exporting the Actors component so other files can use it
export default Actors;
