import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import AnimeList from '../components/AnimeList';
import { QUERY_ME } from '../utils/queries';


const MyAnime = () => {
    const [animeList, SetAnimeList] = useState([]);
    const [search, SetSearch] = useState("");

    const { loading, data } = useQuery(QUERY_ME, {

    });

    const user = data?.me || {};

    const HandleSearch= e =>  {
        e.preventDefault();
        FetchAnime(search);
        // console.log(search);
      
      };

      const FetchAnime = async (query) => {
          const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}
          &order_by=title&sort=asc&limit=10`)

          .then(res => res.json());
          console.log(temp.results);
          SetAnimeList(temp.results);
      }

      if (!user.username) {
        return (
            <h4>
              You need to be logged in to see this page. Use the navigation links
              above to sign up or log in!
            </h4>
          );
      }

    return (
        <div>
            <AnimeList
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
            animeList={animeList}
            />
        </div>
    )
};

export default MyAnime;