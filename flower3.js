$(document).ready(function() {
  $("#f1").click(function(){
    $(this).hide();
    });
    $("#f2").click(function(){
      $(this).hide();
      });
      $("#f3").click(function(){
        $(this).hide();
        });
        $("#f4").click(function(){
          $(this).hide();
          });
          $("#f5").click(function(){
            $(this).hide();
            });
            $("#f6").click(function(){
              $(this).hide();
              });
$("#wanted").click(function(){
  $(this).animate({
  top:'300px',
  height:'200px',
  width:'200px',
  });
  $("#book").click(function(){
    $("#blackblock").show();
    $("#note1").show();
    $("#note2").show();
    $("#newspaper").show();
    $("#wanted").show();
    $("#return").show();
    });
})
