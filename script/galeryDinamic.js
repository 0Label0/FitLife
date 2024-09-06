let step = 0;
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
  $('.arrow-container-rigth').click(()=> {
    step = 500;
    start();
  });
  $('.arrow-container-left').click(()=> {
    step = -500;
    start();
  });
});