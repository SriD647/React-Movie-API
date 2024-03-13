import { useState } from "react";
import MovieDescription from "./MovieDescription";
import { error } from "../App.js";

export default function MovieDisplay({ movie }) {
  const [desc, setDesc] = useState(false);

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
      <img onClick={onOpen} src={movie.Poster} alt={movie.Title} />
      {desc && (
        <div onClick={onClose} className="modal">
          <button className="close">close</button>
          <MovieDescription movie={movie} />
        </div>
      )}
    </div>
  );

  if (movie === null) {
    return null;
  }

  return movie && movie.Title ? loaded() : null;
}