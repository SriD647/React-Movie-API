import { useState } from "react";
import MovieDescription from "./MovieDescription";
import { error } from "../App.js";

export default function MovieDisplay({ movie }) {
  const [desc, setDesc] = useState(false);

  function handleClick() {
    setDesc(!desc);
  }

  const loading = () => error("Invalid film name");
  
  const loaded = () => (
    <div onClick={handleClick} id="movie" style={{ position: 'relative' }}>
      <h2 id="title">{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', height: 'auto' }} />
      {desc && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <MovieDescription movie={movie} />
      </div>}
    </div>
  );

  if (movie === null) {
    return null;
  }

  return movie && movie.Title ? loaded() : loading();
}
