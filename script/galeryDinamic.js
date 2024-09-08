let step = 0;

// mueve el carrousel de imágenes de galería
const start = () => {
  const currentScroll = $('.galery-dinamic').scrollLeft();
  $('.galery-dinamic').animate(
    {
      scrollLeft: currentScroll + step 
    },
    400,
    'linear' 
  );    
};

$(document).ready(function() {
  // se mueve 500px a la izquierda
  $('.arrow-container-rigth').click(()=> {
    step = 500;
    start();
  });
  // mueve 500px a la derecha
  $('.arrow-container-left').click(()=> {
    step = -500;
    start();
  });
});