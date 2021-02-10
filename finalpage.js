$(document).ready(function() {
  $("#b").click(function() {
    var password = "green cloak";
    if($("#pass").val() !== password) {
        $("#err").text("Incorrect password");
    }
    else {
        $("#rain").show();
    }
});
$("#rain").click(function() {
  $("#rain2").fadeIn(300);
  $("#cloak").fadeIn(300);
  $(this).fadeOut(300);
});
$("#rain2").click(function() {
  $("#wholepic").fadeIn(300);
  $(this).fadeOut(300);
  $("#cloak").fadeOut(300);
});
$("#wholepic").click(function() {
  //$("body").delay(900).css("background-color","#0C0000");
  $(this).fadeOut(100);
  $("#cristroom").fadeIn(1000);
  $("#cristjar").fadeIn(1000);
  $("#cristnote").fadeIn(1000);
});
$("#cristnote").click(function(){
  $("#blackblock").fadeIn();
  $("#cristnote2").fadeIn(100);
  $("#return").fadeIn(100);
  });
  $("#cristnote2").click(function(){
    $("#blackblock").fadeOut(100);
    $(this).fadeOut(100);
    });

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'audio3.mp3');

audioElement.addEventListener('ended', function() {
this.play();
}, false);

  $('#b').click(function() {
       audioElement.play();
    });
})
