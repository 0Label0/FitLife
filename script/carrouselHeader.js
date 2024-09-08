$(function() {
  const carrouselHeader = $('.carrousel-header');
  let interval = null;
  let step = $(window).width();
  
  const start = () => {
    // crea una animación que mueve hasta la siguiente imagen, según el ancho de la pantalla
    interval = setInterval(()=> {
      carrouselHeader.animate({
        scrollLeft: carrouselHeader.scrollLeft() + step + 15
      }, 1000, 'linear')
    }, 8000);
  };

  start();

});

