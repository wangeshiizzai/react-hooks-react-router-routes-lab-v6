// Importing React hooks useEffect and useState
import { useEffect, useState } from "react";
// Importing useParams to get the movie ID from the URL
import { useParams } from "react-router-dom";
// Importing NavBar to show at the top
import NavBar from "../components/NavBar";

function Movie() {
  // Create state to store one movie (starts as an empty object)
  const [movie, setMovie] = useState({});

  // useParams() lets us grab the movie ID from the URL
  const params = useParams();
  const movieId = params.id; // example: if URL is /movie/3, movieId = 3

  // useEffect runs when the movieId changes (fetch data for that movie)
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((res) => res.json()) // Convert response to JSON
      .then((data) => setMovie(data)) // Save movie data into state
      .catch((error) => console.error(error)); // Show error if something goes wrong
  }, [movieId]); // Depend on movieId, so it re-fetches if it changes

  // If movie.genres exists, show them as small tags (spans)
  const genre = movie.genres
    ? movie.genres.map((genre) => <span key={genre}>{genre} </span>)
    : null;

  // What the page shows
  return (
    <>
      <header>
        {/* Add the navigation bar here */}
        <NavBar />
      </header>

      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genre}
      </main>
    </>
  );
}

// Exporting Movie so other files can use it
export default Movie;
