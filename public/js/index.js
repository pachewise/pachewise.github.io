$(document).ready(function(){
  $('section').addClass('hidden');
  $('a[href*=#]').click(function(event){
      event.preventDefault();
      var section = $.attr(this, 'href');
      if ($('#navbar').hasClass('hero')) {
        $('section').removeClass('hidden');
        heroToSidebar(section);
      }
      showSection(section);
  });
});

function heroToSidebar(section) {
          $('#navbar').removeClass('hero');
          $('#navbar').addClass('sidebar');
          $('body').addClass('symphonybg');
}

function showSection(section) {
    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 400);
}