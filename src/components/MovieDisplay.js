import React, { useState, useEffect } from "react";
import MovieDescription from "./MovieDescription";
import { error } from "../App.js";

export default function MovieDisplay({ movie }) {
  const [desc, setDesc] = useState(false);
  const [item, setItem] = useState(movie);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const apiKey = "98e3fb1f";

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
    setImageModalOpen(true); // Add this line to mark image modal open
  }

  function onClose(e) {
    e.stopPropagation();
    setDesc(false);
    setImageModalOpen(false); // Add this line to mark image modal closed
  }

  const loading = () => error("Invalid film name");

  const loaded = () => (
    <div onClick={onOpen} id="movie" style={{ position: 'relative' }}>
      <h2 id="title">{item.Title}</h2>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {item.Year && parseInt(item.Year) > 2011 && (
          <div id="hd" style={{ position: 'absolute', top: '5px', left: '5px', padding: '5px', zIndex: '1' }}>HD</div>
        )}
        <div id="rating" style={{ position: 'absolute', top: '5px', left: '5px', padding: '5px', zIndex: '1' }}>{item.imdbRating}</div>
        <img src={item.Poster} alt={item.Title} style={{ position: 'relative' }} className={imageModalOpen ? "image-modal-open" : ""} />
      </div>
      {desc && (
        
        <div onClick={onClose} className="modal">
          <button className="close">X</button>
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
