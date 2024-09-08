$(function(){

  const navBar = $('.local-links');

  $(window).on('wheel', (e) => {
    if(e.originalEvent.deltaY < 0) {
      // se enseña la barra de navegación
      $(navBar).removeClass('hidden-nav-bar');
      
    }else {
      // se esconde la barra de navegación
      $(navBar).addClass('hidden-nav-bar');
  
    }
});


});
