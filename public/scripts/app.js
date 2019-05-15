// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }
  
  var $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('.tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  function createTweetElement(tweet) {
    let $tweet = $('<article>').addClass('tweet');
    let $header = $('<header>');
    let $footer = $('<footer>');
    let $image = $('<img>').attr('id', 'avatar').attr('src', tweet.user.avatars["small"]);
    $header.append($image);
    $header.append('<h2>' + tweet.user["name"] + '</h2>');
    $header.append('<h4>' + tweet.user["handle"]+ '</h4>');
    $footer.append('<h5>' + tweet["created_at"] + '</h5>');
    $tweet.append($header);
    $tweet.append('<p>' + tweet.content["text"]);
    $tweet.append($footer);
    return $tweet;
  }
  
    function renderTweets(tweets) {
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container

      tweets.forEach(createTweetElement())
  
  }

  renderTweets(data);
//   
