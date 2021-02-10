$(document).ready(function() {
$("#musiccontrol").click(function(){
  $("#musichelper").fadeToggle(500);
  });
  $("#flower2").click(function(){
    $("#quote").fadeIn(300);
    $("#return").fadeIn(300);
    });
    $("#return").click(function(){
      $("#quote").fadeOut(300);
      $(this).fadeOut(300);
      });
  $("#flower2").mouseover(function(){
    $(this).animate({
      top:'320px',
    }, 200, function() {
  })
});
  $("#flower2").mouseleave(function(){
    $(this).animate({
      top:'350px',
    }, 200, function() {
  })
});
$("#flower3s").mouseover(function(){
  $(this).animate({
    top:'320px',
  }, 200, function() {
})
});
$("#flower3s").mouseleave(function(){
  $(this).animate({
    top:'350px',
  }, 200, function() {
})
});$("#flower4s").mouseover(function(){
  $(this).animate({
    top:'320px',
  }, 200, function() {
})
});
$("#flower4s").mouseleave(function(){
  $(this).animate({
    top:'350px',
  }, 200, function() {
})
});$("#flower5s").mouseover(function(){
  $(this).animate({
    top:'320px',
  }, 200, function() {
})
});
$("#flower5s").mouseleave(function(){
  $(this).animate({
    top:'350px',
  }, 200, function() {
})
});
                        var audioElement = document.createElement('audio');
                        audioElement.setAttribute('src', 'audio.mp3');

                        audioElement.addEventListener('ended', function() {
                        this.play();
                        }, false);

                          $('#flower2').hover(function() {
                               audioElement.play();
                            });
                            $( "#ball" ).click(function() {
                              $("#ball").css("-moz-transform", "scale(0.7, 0.7)");
                            });
 })
