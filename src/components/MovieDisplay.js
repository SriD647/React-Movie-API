import { useState, useEffect } from "react";
import MovieDescription from "./MovieDescription";
import { error } from "../App.js";

export default function MovieDisplay({ movie }) {
  const [desc, setDesc] = useState(false);

  const apiKey = "98e3fb1f";
  const [item, setItem] = useState(movie);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
      );
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.error(error);
    }
  };

  

  useEffect(() => {
    getMovie();
  }, []);

  function onOpen() {
    setDesc(true);
  }

  function onClose() {
    setDesc(false);
  }

  // const loading = () => error("Invalid film name");

  const loaded = () => (
    <div id="movie" style={{ position: 'relative' }}>
      <h2 id="title">{movie.Title}</h2>
      <div>
        <div>{movie.imdb}</div>
      <img onClick={onOpen} src={movie.Poster} alt={movie.Title} />
      </div>
      {desc && (
        <div onClick={onClose} className="modal">
          <button className="close">close</button>
          <MovieDescription movie={movie} item={item} />
        </div>
      )}
    </div>
  );

  if (movie === null) {
    return null;
  }

  return movie && movie.Title ? loaded() : null;
}