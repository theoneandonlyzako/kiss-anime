import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;

export const ADD_REACTION = gql`
  mutation addReaction($thoughtId: ID!, $reactionBody: String!) {
    addReaction(thoughtId: $thoughtId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;
export const ADD_ANIME = gql`
  mutation addAnime($animeText: String!, $animeEpisodes: Int!) {
    addAnime(animeText: $animeText, animeEpisodes:$animeEpisodes) {
      _id
      animeText
      animeEpisodes
      createdAt
    }
  }
`;
export const CURRENT_EPISODE = gql`
  mutation currentEpisode($id: ID!, $currentEpisode: Int!) {
    currentEpisode(currentEpisode:$currentEpisode) {
      _id
      animeText
      animeEpisodes
      currentEpisode
      createdAt
    }
  }
`;

export const REMOVE_ANIME = gql`
  mutation removeAnime($id: ID!) {
    removeAnime(id: $id) {
      _id
      animeText
      animeEpisodes
      currentEpisode
      createdAt
    }
  }
`;