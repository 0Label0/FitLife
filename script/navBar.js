$(function(){

  const navBar = $('.local-links');

   $(window).on('wheel', (e) => {
    if(e.originalEvent.deltaY < 0) {
      $(navBar).removeClass('hidden-nav-bar');
      
    }else {
      $(navBar).addClass('hidden-nav-bar');
  
    }
});


});
