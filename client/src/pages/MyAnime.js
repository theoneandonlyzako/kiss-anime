import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME, QUERY_ME_BASIC } from "../utils/queries";
import AnimeList from "../components/AnimeList";
import WatchList from "../components/WatchList";

const MyAnime = () => {
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState("");
  // const [upcoming, SetUpcoming] = useState("");

  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  const test = userData?.me || userData?.user || {};

  // redirect to personal MyAnime page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/MyAnime" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links
        above to sign up or log in!
      </h4>
    );
  }

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
    // console.log(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}
          &order_by=title&sort=asc&limit=10`).then((res) => res.json());
    console.log(temp.results);
    SetAnimeList(temp.results);
  };

  // const FetchUpcoming = async (query) => {
  //   const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/upcoming').then((res) => res.json());
  //   console.log(temp.results);
  //   SetUpcoming(temp.results);
  // }

  return (
    <div id="my-anime-section" className="flex-column justify-space-between">
      <div className="col-8 mb-3">
        <AnimeList
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
        />
      </div>
      <div id="" className="col-4 col-lg-3 mb-3">
        <WatchList username={test.username} animes={test.animes} />
      </div>
    </div>
  );
};

export default MyAnime;
