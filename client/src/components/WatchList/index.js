import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_ANIME } from "../../utils/mutations";
import { useAlert } from "react-alert"; //replaces javascript alert
import '../WatchList/styles.css'

const WatchList = ({ username, animes}) => {

  const [removeAnime] = useMutation(REMOVE_ANIME);
  const alert = useAlert();
    if (!animes || !animes.length) {
      return <p className="friend-list-title text-center text-light p-3 noAnimeWarning">{username}, go watch some animes!</p>;
    } 
    
    // else if (anime.animeEpisodes > 24) {
    //   return <input className="bg-dark text-light p-3 noAnimeWarning">What episode are you on?</input>;
    // }


  const episodeOptions = (number) => {
    var epList = [];
    for (let i = 1; i <= number; i++) {
      epList.push(i);
    }
    return epList;
  };

  const handleClick = (e) => {
    const delID = e.target.parentElement.getAttribute("data-id")
    deleteItem( delID )
  }
  

  const deleteItem = async (animeId) => {
    
    // console.log(anime.title);
    console.log(animeId);
    try {
      await removeAnime({
        variables: { animeId: animeId },
      });
      alert.success(<button className="btn profile-title text-secondary">Anime Removed</button>)
    } catch (e) {
      console.error(e);
    }
  };
  
  // var EpisodeSelector = React.createClass({
  //   getInitialState: function() {
  //     return { selectedValue: ''};
  //   }
  // })

  // const removeWatched = () => {
  //   var removeId = document.getAttribute('id');
  //   console.log(removeId);
  // };

 return (
    <div>
     <h3>My Anime List</h3>
     <div className='myAnimeList'>
       {animes.map((anime) => (
        <div className='myAnimeCard'>
            <div className="watchlist-card w-100 mb-2 marginreset" key={anime._id} data-id={anime._id}>
            {anime.animeText} {anime.animeEpisodes}
            <p>Currently on episode: </p>
            <select className="select-board-size">
              {episodeOptions(anime.animeEpisodes).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <button className="anime-card-button w-100 mb-2 marginreset" key={anime._id} data-id={anime._id} onClick={handleClick}>Remove from Watch List</button>
          </div>
        </div>
      ))}
     </div>
      
    </div>
  );
};

export default WatchList;
