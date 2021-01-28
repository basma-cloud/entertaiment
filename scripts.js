$(document).ready(function(){

  

    $("#button").on("click",function(){
    
        $('#nav-container').toggleClass("pushed");
        var div = $("#main-menu-container");
         div.stop(true,false).animate({width:"toggle"},850);
      
         
        $("#home").stop(true,false).animate({fontSize:'40px'},400).animate({fontSize:'38px'},400);
        $("#about").stop(true,false).animate({fontSize:'40px'},500).animate({fontSize:'38px'},300);
        $("#contact").stop(true,false).animate({fontSize:'40px'},650).animate({fontSize:'38px'},250);
        
        });
            
      
    });