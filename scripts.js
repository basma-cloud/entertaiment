$(document).ready(function(){

  

    $("#button").on("click",function(){
        $(".main-logo-container").toggleClass("hide-main-titles");
        $('#nav-container').toggleClass("pushed");
        var div = $("#main-menu-container");
         div.stop(true,false).animate({width:"toggle"},850);
      
        $("#home").stop(true,false).animate({marginLeft:'-100%'},100).animate({marginLeft:'0%'},300);
        $("#about").stop(true,false).animate({marginLeft:'-100%'},200).animate({marginLeft:'0%'},500);
  
        $("#services").stop(true,false).animate({marginLeft:'-100%'},300).animate({marginLeft:'0%'},700);
        $("#contact").stop(true,false).animate({marginLeft:'-100%'},400).animate({marginLeft:'0%'},800);
        
    });
         
    $("header").on("scroll",function(){
        $("header").addClass("white");
    });

});
var home = $('.welcome-section');
$('#home').click(function(e){
  $(".main-logo-container").toggleClass("hide-main-titles");
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

var contact = $('.contact-section');
      
$('#contact').click(function(e){
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

var service = $('.services-section');
$('#services').click(function(e){
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
