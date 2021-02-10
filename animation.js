$(document).ready(function() {
  $("#leaf").mouseover(function(){
    $("#leaf").animate({
      top:'320px',
    }, 200, function() {
  })
  })
  $("#leaf").mouseleave(function(){
    $("#leaf").animate({
      top:'350px',
    }, 200, function() {
  })
});
$("#leaf").click(function(){
   $("#cover1").slideUp(300);
   $("#leafshadow").delay(50).fadeOut(50);
   $("#leaf").delay(50).fadeOut(50);
 });
 $("#fish").click(function(){
    $("#cover2").slideUp(300);
    $("#fishshadow").delay(50).fadeOut(50);
    $("#fish").delay(50).fadeOut(50);
  });
  $("#fish").click(function(){
    $("#cover1").slideDown(300);
  });
  $("#leaf").click(function(){
    $("#cover2").slideDown(300);
  });
  $("#leafs").click(function(){
    $("#cover1").slideDown(300);
    $("#caption1").delay(50).fadeIn(50);
  });
  $("#fishs").click(function(){
    $("#cover2").slideDown(300);
    $("#caption2").delay(50).fadeIn(50);
  });
})
