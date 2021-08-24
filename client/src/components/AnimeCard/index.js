import React from "react";
import { useMutation } from "@apollo/client";
// import { useParams } from "react-router";
import { ADD_ANIME } from "../../utils/mutations";
// import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import './styles.css'
import { useAlert } from "react-alert"; //replaces javascript alert

function AnimeCard({ anime }) {
  const alert = useAlert();

  const [addAnime] = useMutation(ADD_ANIME);
  // const { username: userParam } = useParams();

  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  // const user = data?.me || data?.user || {};


  const handleClick = async () => {
    console.log(anime.title);
    console.log(anime.episodes);
    try {
      await addAnime({
        variables: { animeText:anime.title, animeEpisodes:anime.episodes },
      });
      alert.success(<button className="btn profile-title text-secondary">Success - Good Choice!</button>)
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <article className="anime-card">
      <figure>
        <a href={anime.url} target="_blank" rel="noreferrer">
          <img src={anime.image_url} alt="Anime Cover" />
        </a>
      </figure>
      <h3>{anime.title}</h3>
      <p>Number of Episodes: {anime.episodes}</p>
        <button className="btn ml-auto" onClick={handleClick}>
          Add to Watch List
        </button>

    </article>
  );
}

export default AnimeCard;
