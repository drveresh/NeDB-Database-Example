// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  $.get('/users', function(users) {
    users.forEach(function(user) {
      $('<li></li>').text(user[0] + " " + user[1]).appendTo('ul#users');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var fName = $('input#fName').val();
    var lName = $('input#lName').val();
    $.post('/users?' + $.param({fName:fName, lName:lName}), function() {
      $('<li></li>').text(fName + " " + lName).appendTo('ul#users');
      $('input#fName').val('');
      $('input#lName').val('');
      $('input').focus();
    });
  });
});
