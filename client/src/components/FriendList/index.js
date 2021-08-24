import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return <p className="friend-list-title text-light p-3 text-center">{username}, follow someone!</p>;
  }

  return (
    <div>
      <h5>
        {username} is {friendCount === 1 ? 'following' : 'following'} {friendCount} users
      </h5>
      {friends.map(friend => (
        <button className="friend-btn w-100 display-block mb-2 myAnimeBtn" key={friend._id}>
          <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FriendList;