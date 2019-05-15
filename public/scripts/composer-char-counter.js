
const maxCharacters = 140;
$('textarea').on('input', function () {
  const count = $(this).siblings('.counter');
  const characters = $(this).val().length;
  if (characters > maxCharacters) {
    count.addClass('over');
  } else {
    count.removeClass('over');
  }
  count.text(maxCharacters - characters);
});