
import React from "react";
import '../WatchList/styles.css'

const WatchList = ({ username, animes }) => {
  if (!animes || !animes.length) {
    return <p className="bg-dark text-light p-3 noAnimeWarning">{username}, go watch some animes!</p>;
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
    console.log("clicked!");

  };

  const saveEpisode = () => {
    // get the textarea's current value/text
    var text = (this)
      .val()
      .trim();

    // replace p element
    var taskP = ("<input>")
      .text(text);

  }

  return (
    <div>
      <h5>My Anime List</h5>
      {animes.map((anime) => (
        <div className="btn w-100 display-block mb-2 myAnimeBtn" key={anime._id}>
          {anime.animeText} {anime.animeEpisodes}
          <label>Current Episode</label>
          <input onFocus={addEpisode} onBlur={saveEpisode} id="modalTaskDescription"></input>
        </div>
      ))}
    </div>
  );
};

export default WatchList;
