import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import MovieCard from "./MovieCard";
import "./ContextMovieCard.css";

const ContextMovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default ContextMovieCard;
