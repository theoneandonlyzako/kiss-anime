import React from 'react';


const WatchList = ({ username, animes }) => {
    if (!animes || !animes.length) {
      return <p className="bg-dark text-light p-3">{username}, go watch some animes!</p>;
    }
  
    return (
      <div>
        {animes.map(anime => (
          <div className="btn w-100 display-block mb-2" key={anime._id}>
            {anime.animeText} {anime.animeEpisodes} 
          </div>
        ))}
      </div>
    );
  };
  
  export default WatchList;