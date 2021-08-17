import React from "react";
import AnimeCard from "../AnimeCard";

function AnimeList(props) {
  return (
    <div>
      <form className="searchBox" onSubmit={props.HandleSearch}>
        <input
          type="search"
          placeholder="Search for an anime"
          required
          value={props.search}
          onChange={(e) => props.SetSearch(e.target.value)}
        />
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
