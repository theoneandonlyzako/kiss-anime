import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_ANIME } from "../../utils/mutations";
import { useAlert } from "react-alert"; //replaces javascript alert
import '../WatchList/styles.css'

const WatchList = ({ username, animes}) => {

  const [removeAnime] = useMutation(REMOVE_ANIME);
  const alert = useAlert();
    if (!animes || !animes.length) {
      return <p className="bg-dark text-light p-3 noAnimeWarning">{username}, go watch some animes!</p>;
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
  
  const handleCurrentEp =(e) => {
    // const epID = e.target.parentElement.getAttribute("data-id")
    
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
     <h5>My Anime List</h5>
      {animes.map((anime) => (
        <div className="btn w-100 display-block mb-2 myAnimeBtn" key={anime._id} data-id={anime._id}>
          {anime.animeText} 
          <p>Currently on episode {anime.currentEpisode} out of {anime.animeEpisodes} </p>
          <select className="select-board-size">
            {episodeOptions(anime.animeEpisodes).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <button className="btn w-100 display-block mb-2 myAnimeBtn" key={anime._id} data-id={anime._id} onClick={handleCurrentEp}>Set Current Episode</button>
          <button className="btn w-100 display-block mb-2 myAnimeBtn" data-id={anime._id} onClick={handleClick}>Remove from Watch List</button>
        </div>
      ))}
    </div>
  );
};

export default WatchList;
