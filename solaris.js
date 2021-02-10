$(document).ready(function() {
  $("#c5").mouseover(function() {
     $("#c5_2").show();
   });
    $("#c5_2").mouseleave(function() {
       $("#c5_2").hide();
     });
    $("#c4").mouseover(function() {
       $("#c4_2").show();
     });
      $("#c4_2").mouseleave(function() {
         $("#c4_2").hide();
       });
       $("#c3").mouseover(function() {
          $("#c3_2").show();
        });
         $("#c3_2").mouseleave(function() {
            $("#c3_2").hide();
          });
          $("#c2").mouseover(function() {
             $("#c2_2").show();
           });
            $("#c2_2").mouseleave(function() {
               $("#c2_2").hide();
             });
             $("#innerc").mouseover(function() {
                $("#innerc2").show();
              });
               $("#innerc2").mouseleave(function() {
                  $("#innerc2").hide();
                });
                $("#solarislogo").mouseover(function() {
                   $("#solarislogo2").show();
                 });
                  $("#solarislogo2").mouseleave(function() {
                     $("#solarislogo2").hide();
                   });
                   $("#solarislogo3").mouseover(function() {
                      $("#solarislogo4").show();
                    });
                     $("#solarislogo4").mouseleave(function() {
                        $("#solarislogo4").hide();
                      });
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
if (video.paused) {
  video.play();
  btn.innerHTML = "Pause";
  } else {
  video.pause();
  btn.innerHTML = "Play";
  }
};
$("#c5_2").click(function() {
   $("#myVideo").fadeIn(300);
   $("#blackbutton").fadeIn(300);
   $("#pointer").fadeIn(300);
 });
 $("#blackbutton").click(function() {
   $("#song").fadeIn(300);
   $(this).fadeOut(300);
 });
 $("#song").click(function() {
   $("#blackbutton").fadeIn(300);
   $(this).fadeOut(300);
 });
 $("#pointer").click(function() {
   $("#song").fadeOut(300);
   $(this).fadeOut(300);
   $("#blackbutton").fadeOut(300);
   $("#myVideo").fadeOut(300);
 });
 $("#c4_2").click(function() {
    $("#myVideo2").fadeIn(300);
    $("#blackbutton2").fadeIn(300);
    $("#pointer").fadeIn(300);
  });
  $("#blackbutton2").click(function() {
    $("#song2").fadeIn(300);
    $(this).fadeOut(300);
  });
  $("#song2").click(function() {
    $("#blackbutton2").fadeIn(300);
    $(this).fadeOut(300);
  });
  $("#pointer").click(function() {
    $("#song2").fadeOut(300);
    $(this).fadeOut(300);
    $("#blackbutton2").fadeOut(300);
    $("#myVideo2").fadeOut(300);
  });
  $("#c3_2").click(function() {
     $("#myVideo3").fadeIn(300);
     $("#blackbutton3").fadeIn(300);
     $("#pointer").fadeIn(300);
   });
   $("#blackbutton3").click(function() {
     $("#song3").fadeIn(300);
     $(this).fadeOut(300);
   });
   $("#song3").click(function() {
     $("#blackbutton3").fadeIn(300);
     $(this).fadeOut(300);
   });
   $("#pointer").click(function() {
     $("#song3").fadeOut(300);
     $(this).fadeOut(300);
     $("#blackbutton3").fadeOut(300);
     $("#myVideo3").fadeOut(300);
   });
   $("#innerc2").click(function() {
      $("#myVideo4").fadeIn(300);
      $("#blackbutton4").fadeIn(300);
      $("#pointer").fadeIn(300);
    });
    $("#blackbutton4").click(function() {
      $("#song4").fadeIn(300);
      $(this).fadeOut(300);
    });
    $("#song4").click(function() {
      $("#blackbutton4").fadeIn(300);
      $(this).fadeOut(300);
    });
    $("#pointer").click(function() {
      $("#song4").fadeOut(300);
      $(this).fadeOut(300);
      $("#blackbutton4").fadeOut(300);
      $("#myVideo4").fadeOut(300);
    });
    $("#solarislogo2").click(function() {
      $("#blackblock").fadeOut(300);
        $(this).fadeOut(300);
        $("#solarislogo").fadeOut(300);
    });
    $("#musiccontrol").click(function(){
      $("#musichelper2").fadeToggle(500);
      });
})
