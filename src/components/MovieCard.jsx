// src/components/MovieCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      {/* Movie title in an h2 heading */}
      <h2>{movie.title}</h2>

      {/* Link text should be "View Info" */}
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </div>
  );
}

export default MovieCard;
