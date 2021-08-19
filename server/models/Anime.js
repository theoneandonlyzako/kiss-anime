const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const animeSchema = new Schema(
  {
    animeText: {
      type: String,
    },
    animeEpisodes: {
        //change to Number.
        type: String, 
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Anime = model('Anime', animeSchema);

module.exports = Anime;