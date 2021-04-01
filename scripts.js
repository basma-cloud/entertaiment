$(document).ready(function(){



    $("#button").on("click",function(){
        
      $(".main-logo-container").toggleClass("hide-main-titles");
      $(".social-icons").toggleClass("hide-social-icons");

      $('#nav-container').toggleClass("pushed");
        var div = $("#main-menu-container");
         div.stop(true,false).animate({width:"toggle"},850);
      
        $("#home").stop(true,false).animate({marginLeft:'-100%'},100).animate({marginLeft:'0%'},300);
        
        $("#about").stop(true,false).animate({marginLeft:'-100%'},200).animate({marginLeft:'0%'},500);
        $("#services").stop(true,false).animate({marginLeft:'-100%'},300).animate({marginLeft:'0%'},700);
        $("#our-work").stop(true,false).animate({marginLeft:'-100%'},350).animate({marginLeft:'0%'},900);
       
        $("#contact").stop(true,false).animate({marginLeft:'-100%'},400).animate({marginLeft:'0%'},900);
        
    });
         
    function check_header_Viewport(){
      if( ($("header").offset().top == 0)){
        $("header").removeClass("grey");
      } else {
        $("header").addClass("grey");
      }
    }
    $window.on('scroll resize', check_header_Viewport);
    $window.trigger('scroll');


});
var home = $('.welcome-section');
$('#home').click(function(e){
  $(".main-logo-container").toggleClass("hide-main-titles");
  $(".social-icons").toggleClass("hide-social-icons");

  $('html, body').animate({
        scrollTop: $(home).offset().top
    }, 700);

    var div = $("#main-menu-container");
    div.stop(true,false).animate({width:"toggle"},650);
    $('#nav-container').toggleClass("pushed");
})
var homeMain =$('.welcome-section');
$('#home-main').click(function(e){
  $('html, body').animate({
    scrollTop: $(homeMain).offset().top
}, 700);
})




var about = $('.about-section');

$('#about').click(function(e){
  $(".social-icons").toggleClass("hide-social-icons");

  $(".main-logo-container").toggleClass("hide-main-titles");
  $('html, body').animate({
        scrollTop: $(about).offset().top
    }, 700);

    var div = $("#main-menu-container");
    div.stop(true,false).animate({width:"toggle"},650);
    $('#nav-container').toggleClass("pushed");
})
var aboutMain =$('.about-section');
$('#about-main').click(function(e){
  $('html, body').animate({
    scrollTop: $(aboutMain).offset().top
}, 700);
})


var service = $('.services-section');
$('#services').click(function(e){
  $(".social-icons").toggleClass("hide-social-icons");

  $(".main-logo-container").toggleClass("hide-main-titles");
  $('html, body').animate({
        scrollTop: $(service).offset().top
    }, 700);

    var div = $("#main-menu-container");
    div.stop(true,false).animate({width:"toggle"},650);
    $('#nav-container').toggleClass("pushed");
})

var servicesMain =$('.services-section');
$('#services-main').click(function(e){

  $('html, body').animate({
    scrollTop: $(servicesMain).offset().top
}, 700);
})

var ourWork = $('.our-work');
$('#our-work').click(function(e){
  $(".social-icons").toggleClass("hide-social-icons");

  $(".main-logo-container").toggleClass("hide-main-titles");
  $('html, body').animate({
        scrollTop: $(ourWork).offset().top
    }, 700);

    var div = $("#main-menu-container");
    div.stop(true,false).animate({width:"toggle"},650);
    $('#nav-container').toggleClass("pushed");
})

var ourWorkMain =$('.our-work');
$('#our-work-main').click(function(e){
  $('html, body').animate({
    scrollTop: $(ourWorkMain).offset().top
}, 700);
})

var contact = $('.contact-section');
      
$('#contact').click(function(e){
  $(".social-icons").toggleClass("hide-social-icons");

  $(".main-logo-container").toggleClass("hide-main-titles");
  $('html, body').animate({
        scrollTop: $(contact).offset().top
    }, 700);

    var div = $("#main-menu-container");
    div.stop(true,false).animate({width:"toggle"},650);
    $('#nav-container').toggleClass("pushed");
})

var contactMain =$('.contact-section');
$('#contact-main').click(function(e){
  $('html, body').animate({
    scrollTop: $(contactMain).offset().top
}, 700);
})




//scroll-animations
    
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view scale-icons');
    } else {
      $element.removeClass('in-view scale-icons' );
    }
  });
}


$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

//scrolls to mission and vision when clicking the arrow 
var aboutMain =$('.about-section');
$('.main-arrow').click(function(e){
  $('html, body').animate({
    scrollTop: $(aboutMain).offset().top
}, 900);
});

v/*ar selector = '.header-menu li ';

$(selector).on('click', function(){
    $(selector).removeClass('active-link');
    $(this).addClass('active-link');
});

$(selector).on('click', function(){
  $(selector).removeClass('all');
  $(this).addClass('all');
});*/

