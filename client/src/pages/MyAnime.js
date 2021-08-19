import React, { useState } from 'react';
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

          .then(res => res.json())
          if (temp) {
            console.log(temp.results);
            if (Array.isArray(temp.results)) {
                SetAnimeList(temp.results);
            }
            else {
                alert('No anime under that name!');
            }
          }
          else {
              alert('No anime under that nombre!')
          }
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