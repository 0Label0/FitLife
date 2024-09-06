$(function() {
  ScrollReveal().reveal('.reveal', {
    delay: 20,
    distance: '300px',
    duration: 400,
    easing: 'ease-in',
    opacity: 0.7,
    origin: 'bottom',
    mobile: true
  });

  ScrollReveal().reveal('.reveal-2', {
    delay:0,
    distance:'1000px',
    duration:700,
    interval: 50,
    opacity:0.5,
    origin:'left',
    movile: true
  });

  ScrollReveal().reveal('.reveal-3', {
    delay:0,
    distance:'1000px',
    duration:700,
    interval: 50,
    opacity:0.5,
    origin:'right',
    movile: true
  });

   // Cuando carga la página devuelve al inicio, para evitar problemas en el scrollReveal
   window.onload = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1)
  };

});
