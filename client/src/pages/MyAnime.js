import React, { useState } from 'react';
// import { PromiseProvider } from 'mongoose';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHT } from '../utils/queries';
import AnimeList from '../components/AnimeList';


const MyAnime = () => {
    const [animeList, SetAnimeList] = useState([]);
    const [search, SetSearch] = useState("");

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