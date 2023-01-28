$(document).ready(function(){
  
  // initialize sidenav for mobile
  $('.sidenav').sidenav();

  // slide from right
  $('.sidenav').sidenav({
    menuWidth: 300, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
  
  // MODAL INITIALIZATION
  $('.modal').modal();

  // show color icon on hover
  $('.social-link').hover(function() {
    $(this).children().toggleClass('hide');
  });

  // clear form after submission
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
  
});