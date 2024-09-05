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
    delay:50,
    distance:'500px',
    duration:700,
    interval: 50,
    opacity:0.5,
    origin:'left',
    movile: true
  });

  ScrollReveal().reveal('.reveal-3', {
    delay:50,
    distance:'500px',
    duration:700,
    interval: 50,
    opacity:0.5,
    origin:'',
    movile: true
  });
});
