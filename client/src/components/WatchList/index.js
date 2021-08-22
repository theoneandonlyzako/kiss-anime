import React from 'react';
import '../WatchList/styles.css'

const WatchList = ({ username, animes }) => {
    if (!animes || !animes.length) {
      return <p className="bg-dark text-light p-3 noAnimeWarning">{username}, go watch some animes!</p>;
    }
  
    return (
      <div>
        <h5>My Anime List</h5>
        {animes.map(anime => (
          <div className="btn w-100 display-block mb-2 myAnimeBtn" key={anime._id}>
            {anime.animeText} {anime.animeEpisodes}
          </div>
        ))}
      </div>
    );
  };
  
  export default WatchList;