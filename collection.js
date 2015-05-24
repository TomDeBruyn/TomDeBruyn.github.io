var main = function(){
  "use strict";
setInterval(function(){
    if ($(".img1").hasClass ("zichtbaar")){
        $(".img1").fadeOut(2000,function(){
          $(".img2").fadeIn(2000,function (){
            $(".img2").addClass("zichtbaar");
            $(".img1").removeClass("zichtbaar");
        });
      });
    }
    if ($(".img2").hasClass ("zichtbaar")){
        $(".img2").fadeOut(2000,function(){
          $(".img3").fadeIn(2000,function (){
            $(".img3").addClass("zichtbaar");
            $(".img2").removeClass("zichtbaar");
        });
       });
    }
    if ($(".img3").hasClass ("zichtbaar")){
        $(".img3").fadeOut(2000,function(){
          $(".img1").fadeIn(2000,function (){
            $(".img1").addClass("zichtbaar");
            $(".img3").removeClass("zichtbaar");
        });
          });
        }
    },5000);
}
$("document").ready(main);