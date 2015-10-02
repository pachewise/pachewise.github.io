$(document).ready(function() {
  $('a[href*=#]').click(function(event){
      event.preventDefault();
      var anchor = $( $.attr(this, 'href') );
      var position = $('#content').scrollTop() + anchor.position().top;
      $('#content').animate({
          scrollTop: position
      }, 500);
  });
});