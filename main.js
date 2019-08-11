$(document).ready(() => {

  $('#input-button').on('click', () => {
    $('.dog-name').text($('#user-input').val());
  });

});