$(document).ready(function(){
  
  // initialize parallax effect
  // $('.parallax').parallax();

  // initialize sidenav for mobile
  $('.sidenav').sidenav();

  // slide from right
  $('.sidenav').sidenav({
    menuWidth: 300, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });

  // var i = 0;
  // var banner = 'Apologetic Millennial';
  // var $banner = document.getElementById('banner-h1');
  // $banner.innerHTML = 'test';
  // var speed = 250;
  
  // MODAL INITIALIZATION
  $('.modal').modal();
  $('#newsletter-modal').modal('open'); 

  // show color icon on hover
  $('.social-link').hover(function() {
    $(this).children().toggleClass('hide');
  });

  // clear form after submission -- for mailchimp / formspree? do we still need this?
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
  
});