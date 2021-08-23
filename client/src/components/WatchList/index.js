import React from "react";
// import ContentEditable from "react-contenteditable";
import '../WatchList/styles.css'

// import ReactDOM from "react-dom";


const WatchList = ({ username, animes }) => {
  if (!animes || !animes.length) {
    return <p className="bg-dark text-light p-3 noAnimeWarning">{username}, No animes saved!</p>;
  };

  const addEpisode = () => {
    
  }
  const saveEpisode = () => {

  }

  // class MyComponent extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = { html: "Edit <b>me</b> !" };
  //   }
  
  //   handleChange = evt => {
  //     this.setState({ html: evt.target.value });
  //   };
  // }

  return (
    <div>
      <h5>My Anime List</h5>
      {animes.map((anime) => (
        <div id="root" className="btn w-100 display-block mb-2 myAnimeBtn" key={anime._id}>
          {anime.animeText} {anime.animeEpisodes}
          <label>Current Episode</label>
          <textarea onFocus={addEpisode} onBlur={saveEpisode} id="episode-description"></textarea>
          {/* <ContentEditable
            html={this.state.html} // innerHTML of the editable div
            disabled={false} // use true to disable edition
            onChange={this.handleChange} // handle innerHTML change
          /> */}
        </div>
      ))}
    </div>
  );
};
// const rootElement = document.getElementById("root");
// ReactDOM.render(<MyComponent />, rootElement);
export default WatchList;
