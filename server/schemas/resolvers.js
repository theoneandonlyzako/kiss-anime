const { AuthenticationError } = require('apollo-server-express');
const { User, Thought, Anime } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('thoughts')
          .populate('friends')
          .populate('animes');
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    //find all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('thoughts')
        .populate('friends')
        .populate('animes');
    },
    //find one user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts')
        .populate('animes');
    },
    //find all thoughts
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    //find single thought
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },

    //find one anime by Id
    // anime: async (parent, { _id }) => {
    //   return Anime.findOne({ _id });
    // },
    
    //find all animes
    animes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Anime.find(params).sort({ createdAt: -1 });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Thought.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughts: thought._id } },
          { new: true }
        );

        return thought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReaction: async (parent, { thoughtId, reactionBody }, context) => {
      if (context.user) {
        const updatedThought = await Thought.findOneAndUpdate(
          { _id: thoughtId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addAnime: async (parent, args, context) => {
      // console.log(context.user.username);
      // console.log(Anime);
      console.log(args);
      if (context.user) {
        const anime = await Anime.create({ ...args });
        console.log(anime);
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { animes: anime } },
          { new: true }
        );

        return anime;
      }

      throw new AuthenticationError('You need to be logged in!');
    }, 
    currentEpisode: async (parent, args, context) => {
      console.log(args);
      if (context.user) {
        return Anime.findOneAndUpdate(
          {_id: args._id}, 
          {currentEpisode: args.currentEpisode}, 
          {new: true}
          );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    //stop
    removeAnime: async(parent, { animeId }, context ) => {
      if (context.user) {
        console.log(animeId);
        const updatedAnime = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { animes: animeId } },
          { new: true }
        );

        return updatedAnime;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    removeFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  }

};

module.exports = resolvers;
