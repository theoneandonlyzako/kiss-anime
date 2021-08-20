import React from "react";
import AnimeCard from "../AnimeCard";
import './styles.css'

function AnimeList(props) {
  return (
    <div>
      <form className="searchBox" onSubmit={props.HandleSearch}>
        <input
          className="search"
          type="search"
          placeholder="Search for an anime"
          required
          value={props.search}
          onChange={(e) => props.SetSearch(e.target.value)}
        />
        <button className="searchAnimeBtn d-block w-100" type="submit">
                Submit
        </button>
      </form>
      <div className="anime-list">
        {props.animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id}></AnimeCard>
        ))}
      </div>
    </div>
  );
}

export default AnimeList;
