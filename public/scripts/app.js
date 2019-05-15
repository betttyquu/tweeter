
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
//   }
  
//   const data = [
//     {
//       "user": {
//         "name": "Newton",
//         "avatars": {
//           "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//           "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//           "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//         },
//         "handle": "@SirIsaac"
//       },
//       "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//       },
//       "created_at": 1461116232227
//     },
//     {
//       "user": {
//         "name": "Descartes",
//         "avatars": {
//           "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//           "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//           "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//         },
//         "handle": "@rd" },
//       "content": {
//         "text": "Je pense , donc je suis"
//       },
//       "created_at": 1461113959088
//     },
//     {
//       "user": {
//         "name": "Johann von Goethe",
//         "avatars": {
//           "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//           "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//           "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//         },
//         "handle": "@johann49"
//       },
//       "content": {
//         "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//       },
//       "created_at": 1461113796368
//     }
//   ];
  
  
function createTweetElement(tweet) {
  let $tweet = $('<article>').addClass('tweet');
  let $header = $('<header>');
  let $footer = $('<footer>');
  let $image = $('<img>').attr('id', 'avatar').attr('src', tweet.user.avatars["small"]);
  $header.append($image);
  $header.append('<h3>' + tweet.user["name"] + '</h3>');
  $header.append('<h4>' + tweet.user["handle"]+ '</h4>');
  $footer.append('<h5>' + tweet["created_at"] + '</h5>');
  $tweet.append($header);
  $tweet.append('<p>' + tweet.content["text"]);
  $tweet.append($footer);
  return $tweet;
}
  
function renderTweets(tweetArray) {
  tweetArray.forEach(data => {
    $('.tweets-container').append(createTweetElement(data));
  })
};
// renderTweets(data);

$( "#newpost" ).submit(function( event ) {
  event.preventDefault();
  const str = $( "form" ).serialize();
  const text = document.querySelector("textarea");
  const empty = "";

  if(text.value && text.value.length < 140){
    $.post( "http://localhost:8080/tweets",str, function(data) {
    });
  } if (text.value === empty){
    alert("CANNOT BE AN EMPTY TWEEEEEET")
  } if(text.value.length > 140){
    alert("YOU'VE EXCEEEEEED THE MAX CHARACTER COUNT")
  }

});

//success callback func = renderTweets();
$(function() {
  function loadTweets (){
    $.get('/tweets',function(data){
      renderTweets(data);
    } 
  )}
  loadTweets();
});

