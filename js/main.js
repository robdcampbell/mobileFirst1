// Animate Smooth Scroll

// NAV

// Home
$('.home__link').on('click',function(){
  const images = $('.home').position().top;

  $('html, body').animate(
    {
    scrollTop: images
  },900);
});

// Projects
$('.projects__link').on('click',function(){
  const images = $('#images').position().top;

  $('html, body').animate(
    {
    scrollTop: images
  },900);
});

// About
$('.about__link').on('click',function(){
  const images = $('.about').position().top;

  $('html, body').animate(
    {
    scrollTop: images
  },900);
});

// Contact
$('.contact__link').on('click',function(){
  const images = $('.contact').position().top;

  $('html, body').animate(
    {
    scrollTop: images
  },900);
});

// View Work BTN
$('#view-work').on('click',function(){
  const images = $('#images').position().top;

  $('html, body').animate(
    {
    scrollTop: images
  },900);
});



