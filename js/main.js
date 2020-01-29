$("figure").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);


//menu
$(".navToggle").click(function() {
  $(this).toggleClass("is-active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
});


//menu close on menu item click
$(".navToggleClose").click(function() {
  $(".hamburger").removeClass("is-active");
  $(".overlay").removeClass("open");
  // this line ▼ prevents content scroll-behind
});


//slider-#1 initialization
$(document).ready(function(){
  $('.benefits__slider').slick({
    variableWidth: true,
    speed: 200
});
});


//slider-#1 counter
var $status = $('.benefits_pagingInfo');
var $slickElement = $('.benefits__slider');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});


//slider-#2 initialization
$(document).ready(function(){
  $('.testimonials__slider').slick({
    variableWidth: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">></button>'
  });
});


// Smooth scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

