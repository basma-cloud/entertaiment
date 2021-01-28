$(document).ready(function(){

  

    $("#button").on("click",function(){
    
        $('#nav-container').toggleClass("pushed");
        var div = $("#main-menu-container");
         div.stop(true,false).animate({width:"toggle"},850);
      
         
        $("#home").stop(true,false).animate({fontSize:'42px'},400).animate({fontSize:'38px'},400);
        $("#about").stop(true,false).animate({fontSize:'42px'},500).animate({fontSize:'38px'},300);
        $("#contact").stop(true,false).animate({fontSize:'42px'},650).animate({fontSize:'38px'},250);
        
    });
         
    $("header").on("scroll",function(){
        $("header").addClass("white");
    });
      
    });

    
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
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}


$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');