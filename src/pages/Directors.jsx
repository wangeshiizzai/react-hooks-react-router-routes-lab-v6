// Importing React hooks useEffect and useState
import { useEffect, useState } from "react";
// Importing the NavBar component for navigation
import NavBar from "../components/NavBar";

function Directors() {
  // State variable to store list of directors
  const [directors, setDirectors] = useState([]);

  // useEffect runs when the page loads (just once)
  useEffect(() => {
    // Fetching directors data from local server
    fetch("http://localhost:4000/directors")
      .then((response) => response.json()) // Convert data to JSON format
      .then((directorData) => setDirectors(directorData)); // Save directors in state
  }, []); // Empty array means run only once

  // Mapping (looping) through each director to make HTML for them
  const directorsList = directors.map((director) => {
    // Getting this director's list of movies
    const directorMovies = director.movies;

    // Making list items for each movie
    const directorMoviesList = directorMovies.map((movie) => {
      return <li key={movie}>{movie}</li>;
    });

    // Returning one article for each director
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>{directorMoviesList}</ul>
      </article>
    );
  });

  // Returning what should be displayed on the screen
  return (
    <>
      <header>
        {/* The NavBar goes here for page navigation */}
        <NavBar />
      </header>
      <main>
        {/* Directors page content */}
        <h1>Directors Page</h1>
        {directorsList}
      </main>
    </>
  );
}

// Exporting the Directors component so it can be used in other files
export default Directors;
