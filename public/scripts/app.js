// appending each tweet element to html
function createTweetElement(tweet) {
  let $tweet = $('<article>').addClass('tweet');
  let $header = $('<header>');
  let $footer = $('<footer>');
  let $image = $('<img>').attr('id', 'avatar').attr('src', tweet.user.avatars["small"]);
  let $icon = $('<img>').attr('id', 'icon').attr('src', "http://chittagongit.com/images/tweet-icon-png/tweet-icon-png-17.jpg");
  $header.append($image);
  $footer.append($icon);
  $header.append('<h3>' + tweet.user["name"] + '</h3>');
  $header.append('<h4>' + tweet.user["handle"] + '</h4>');
  $footer.append('<h5>' + moment(new Date(tweet["created_at"])).fromNow() + '</h5>');
  $tweet.append($header);
  $tweet.append('<p>' + tweet.content["text"]);
  $tweet.append($footer);
  return $tweet;
}


function renderTweets(tweetArray) {
  $('.tweets-container').empty();
  tweetArray.forEach(data => {
    $('.tweets-container').prepend(createTweetElement(data));
  })
};

// when clicked tweet;
$("#newpost").on('submit', (function (event) {
  event.preventDefault();
  const str = $("form").serialize();
  const text = document.querySelector("textarea");
  const empty = "";
  if (text.value && text.value.length < 140) {
    $.post("http://localhost:8080/tweets", str, function (data) {
      loadTweets();
      $('#textinput').val('');
      $('span.counter').text(140);
      $('.error').hide();
    });
  } if (text.value === empty) {
    $("#emptyError").slideDown();

  } if (text.value.length > 140) {
    $("#maxCharactersError").slideDown();
  }
}));

//success callback func = renderTweets();
function loadTweets() {
  $.get('/tweets', function (data) {
    renderTweets(data);
  }
)}

$(function() {
  loadTweets();
});

// compose button toggles textarea
$("#compose").click(function () {
  $(".new-tweet").slideToggle();
});

// directly go to textarea w/o clicking it
$("#compose").click(function () {
  $("textarea").focus();
});

//textbox hidden on page load
$(".new-tweet").hide();

// hide error
$(".error").hide();

// error message displayed when there's error, slides away when there isn't
$("#textinput").on('input',
  function () {
    const text = document.querySelector("textarea");
    const empty = "";
    if (text.value.length === empty) {
      $("#emptyError").slideDown();
    }
    if (text.value.length > 140) {
      $("#maxCharactersError").slideDown();
    } else {
      $('.error').hide();
    }
  });

