$(function() {
  const carrouselHeader = $('.carrousel-header');
  let interval = null;
  let step = $(window).width();
  
  const start = () => {
  
    interval = setInterval(()=> {
      carrouselHeader.animate({
        scrollLeft: carrouselHeader.scrollLeft() + step + 15
      }, 1000, 'linear')
    }, 8000);
  };
  
  const stop = () => {
    clearInterval(interval);
  };
  
  start();

})

