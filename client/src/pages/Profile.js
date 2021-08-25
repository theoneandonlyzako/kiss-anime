import React from "react";
import { Redirect, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import ThoughtList from "../components/Thoughtlist";
import FriendList from "../components/FriendList";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";
import ThoughtForm from '../components/ThoughtForm';
import { useAlert } from "react-alert";

const Profile = () => {
  const alert = useAlert();

  const [addFriend] = useMutation(ADD_FRIEND);
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  const animes = user.animes;
  // redirect to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
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

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
      alert.success(<button className="btn profile-title text-secondary" style={{ minWidth: 300}}>You're now following {user.username}!</button>)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex-row align-center mb-3">
        <h2 className="profile-title  display-inline-block">
         {userParam ? `${user.username}'s PROFILE` : "MY PROFILE"}
        </h2>
        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Follow {userParam ? `${user.username}` : "User"}
          </button>
        )}
      </div>
      <div className="mb-3">{!userParam && <ThoughtForm />}</div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s Posts.`}
          />
        </div>

      <div>
        <h3>{user.username} is watching: </h3>
          {animes.map((anime) => (
        <div className="watchlist-card w-100 mb-2 marginreset" key={anime._id} data-id={anime._id}>
          <a href={anime.animeUrl} target="_blank" rel="noreferrer"> {anime.animeText} </a> 
          {anime.currentEpisode < 1 && (<p> Currently on episoode 1 out of {anime.animeEpisodes}</p>)}
          {anime.currentEpisode > 0 && (<p>Currently on episode {anime.currentEpisode} out of {anime.animeEpisodes} </p>)}
        </div>
       ))}
       </div>


        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
