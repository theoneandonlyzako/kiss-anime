import React from "react";
import './styles.css'

function AnimeCard({ anime }) {
  return (
    <article className="anime-card">
      <figure>
        <a href={anime.url} target="_blank" rel="noreferrer">
          <img src={anime.image_url} alt="Anime Cover" />
        </a>
      </figure>
      <h3>{anime.title}</h3>
      <p>Number of Episodes: {anime.episodes}</p>
    </article>
  );
}

export default AnimeCard;
