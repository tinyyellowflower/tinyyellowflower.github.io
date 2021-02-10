$(document).ready(function() {
$("#musiccontrol").click(function(){
  $("#musichelper").fadeToggle(500);
  });
  $("#flower1").click(function(){
    $("#tyf1").fadeIn(1000);
  });
  $("#tyf1").click(function(){
    $("#tyf2").fadeIn(1000);
  });
  $("#tyf2").click(function(){
    $("#tyf3").fadeIn(1000);
  });
  $("#tyf3").click(function(){
    $("#tyf4").fadeIn(1000);
  });
  $("#tyf4").click(function(){
    $("#tyf5").fadeIn(1000);
  });
  $("#tyf5").click(function(){
    $("#tyf6").fadeIn(1000);
  });
  $("#tyf6").click(function(){
    $("#tyf7").fadeIn(1000);
  });
  $("#tyf7").click(function(){
    $("#tyf8").fadeIn(1000);
    $("#flower2").delay(300).show();
    $("#flower2").delay(300).effect("bounce", {
       times: 3
   }, 300);
   $("#flower1").hide();
    });
  $("#flower1").click(function(){
    $(this).animate({
      top:'600px',
      height:'70px',
      width:'70px',
  });
      });
$("#tyf1").mouseover(function() {
   $(this).css("box-shadow", "0 10px 6px -6px #8E6964");
  }).mouseleave(function(){
  $(this).css("box-shadow", "0px 0px 0px #555");
  });
  $("#tyf2").mouseover(function() {
     $(this).css("box-shadow", "0 10px 6px -6px #8E6964");
    }).mouseleave(function(){
    $(this).css("box-shadow", "0px 0px 0px #555");
    });
    $("#tyf3").mouseover(function() {
       $(this).css("box-shadow", "0 10px 6px -6px #8E6964");
      }).mouseleave(function(){
      $(this).css("box-shadow", "0px 0px 0px #555");
      });
      $("#tyf4").mouseover(function() {
         $(this).css("box-shadow", "0 10px 6px -6px #8E6964");
        }).mouseleave(function(){
        $(this).css("box-shadow", "0px 0px 0px #555");
        });
        $("#tyf5").mouseover(function() {
           $(this).css("box-shadow", "0 10px 6px -6px #8E6964");
          }).mouseleave(function(){
          $(this).css("box-shadow", "0px 0px 0px #555");
          });
          $("#tyf6").mouseover(function() {
             $(this).css("box-shadow", "0 10px 6px -6px #8E6964");
            }).mouseleave(function(){
            $(this).css("box-shadow", "0px 0px 0px #555");
            });
            $("#tyf7").mouseover(function() {
               $(this).css("box-shadow", "0 10px 6px -6px #8E6964");
              }).mouseleave(function(){
              $(this).css("box-shadow", "0px 0px 0px #555");
              });
              var audioElement = document.createElement('audio');
              audioElement.setAttribute('src', 'audio.mp3');

              audioElement.addEventListener('ended', function() {
              this.play();
              }, false);

                $('#flower1').click(function() {
                     audioElement.play();
                  });
 })
