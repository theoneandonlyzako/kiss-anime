import { useMutation } from "@apollo/client";
import React from "react";
// import { useParams } from "react-router";
import { ADD_ANIME } from "../../utils/mutations";
// import { QUERY_USER, QUERY_ME } from "../../utils/queries";

function AnimeCard({ anime }) {
  const [addAnime] = useMutation(ADD_ANIME);
  // const { username: userParam } = useParams();

  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  // const user = data?.me || data?.user || {};

  const handleClick = async () => {
    console.log(anime);
    try {
      await addAnime({
        variables: { anime: anime.title },
      });
      
      alert("DANGER");
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
