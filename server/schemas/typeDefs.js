// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our tyepDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
    animes: [Anime]
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
  
  type Anime {
    _id: ID
    animeText: String
    animeEpisodes: String
    createdAt: String
    username: String
    currentEpisode: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
    animes(username: String): [Anime]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
    addAnime(animeText: String!, animeEpisodes: Int!): Anime
    currentEpisode(animeId: ID!, currentEpisode: Int!): Anime
    removeAnime(animeId: ID!): Anime
    removeFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
