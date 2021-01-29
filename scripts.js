$(document).ready(function(){

  

    $("#button").on("click",function(){
    
        $('#nav-container').toggleClass("pushed");
        var div = $("#main-menu-container");
         div.stop(true,false).animate({width:"toggle"},850);
      
        $("#home").stop(true,false).animate({fontSize:'42px'},300).animate({fontSize:'38px'},300);
        $("#about").stop(true,false).animate({fontSize:'42px'},400).animate({fontSize:'38px'},400);
        $("#services").stop(true,false).animate({fontSize:'42px'},500).animate({fontSize:'38px'},300);
        $("#contact").stop(true,false).animate({fontSize:'42px'},650).animate({fontSize:'38px'},250);
        
    });
         
    $("header").on("scroll",function(){
        $("header").addClass("white");
    });

});
var home = $('.welcome-section');
$('#home').click(function(e){
  $('html, body').animate({
        scrollTop: $(home).offset().top
    }, 700);

    var div = $("#main-menu-container");
    div.stop(true,false).animate({width:"toggle"},650);
    $('#nav-container').toggleClass("pushed");
})

var about = $('.about-section');
$('#about').click(function(e){
  $('html, body').animate({
        scrollTop: $(about).offset().top
    }, 700);

    var div = $("#main-menu-container");
    div.stop(true,false).animate({width:"toggle"},650);
    $('#nav-container').toggleClass("pushed");
})

var contact = $('.contact-section');
      
$('#contact').click(function(e){
  $('html, body').animate({
        scrollTop: $(contact).offset().top
    }, 700);

    var div = $("#main-menu-container");
    div.stop(true,false).animate({width:"toggle"},650);
    $('#nav-container').toggleClass("pushed");
})

var service = $('.services-section');
$('#services').click(function(e){
  $('html, body').animate({
        scrollTop: $(service).offset().top
    }, 700);

    var div = $("#main-menu-container");
    div.stop(true,false).animate({width:"toggle"},650);
    $('#nav-container').toggleClass("pushed");
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
