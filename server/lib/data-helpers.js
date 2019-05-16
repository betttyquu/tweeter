"use strict";
// Simulates the kind of delay we see with network or filesystem operations


module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function saveTweet(newTweet, callback){
      db.collection("tweets").insertOne(newTweet);
      callback(null, true);
    },


    // Get all tweets in `db`, sorted by newest first
    getTweets: function getTweets(callback) {
      db.collection("tweets").find().toArray(callback);
    }

  };
}

// Defines helper functions for saving and getting tweets, using the database `db`
