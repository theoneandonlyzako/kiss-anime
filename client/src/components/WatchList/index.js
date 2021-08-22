import React from "react";

const WatchList = ({ username, animes }) => {
  if (!animes || !animes.length) {
    return (
      <p className="bg-dark text-light p-3">
        {username}, go watch some animes!
      </p>
    );
  }
  const episodeOptions = (number) => {
    var epList = [];
    for (let i = 1; i <= number; i++) {
      epList.push(i);
    }
    return epList;
  };

  return (
    <div>
      {animes.map((anime) => (
        <div className="btn w-100 display-block mb-2" key={anime._id}>
          {anime.animeText} {anime.animeEpisodes}
          <select className="select-board-size">
            {episodeOptions(anime.animeEpisodes).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default WatchList;
