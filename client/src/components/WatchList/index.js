
import React from "react";
import '../WatchList/styles.css'

const WatchList = ({ username, animes }) => {
  if (!animes || !animes.length) {
    return <p className="bg-dark text-light p-3 noAnimeWarning">{username}, No animes saved!</p>;
  }

  // function addEpisode() {
  //   var text = (this)
  //     .text()
  //     .trim();
  //   var textInput = ("<textarea>")
  //     .addClass("form-control")
  //     .val(text);

  //   (this).replaceWith(textInput);
  //   textInput.trigger("focus");
  //   console.log("clicked!");

  // }

  const addEpisode = () => {
    // var epis = (this)
    //   .text()
    //   .trim();
    // var textInput = ("<textarea>")
    //   .val(epis);

    // (this).replaceWith(textInput);
    // textInput.trigger("focus");
    const epis = (document.getElementById('episodeDescription').value)
    
    console.log("Listening!");
    console.log(epis);

  };

  const saveEpisode = () => {
    // get the textarea's current value/text
    const epis = (document.getElementById('episodeDescription').value)
    document.setAttribute('value', epis);

    // replace p element
    // textObject.value = text

  }

  return (
    <div>
      <h5>My Anime List</h5>
      {animes.map((anime) => (
        <div className="btn w-100 display-block mb-2 myAnimeBtn" key={anime._id}>
          {anime.animeText} {anime.animeEpisodes}
          <label>Current Episode</label>
          <input onFocus={addEpisode} onBlur={saveEpisode} id="episodeDescription"></input>
        </div>
      ))}
    </div>
  );
};

export default WatchList;
