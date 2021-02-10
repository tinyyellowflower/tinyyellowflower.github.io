$(document).ready(function() {
  $("#f1").click(function(){
    $(this).fadeOut(600);
  });
  $("#f2").click(function(){
    $(this).fadeOut(600);
  });
  $("#f3").click(function(){
    $(this).fadeOut(600);
  });
  $("#f4").click(function(){
    $(this).fadeOut(600);
  });
  $("#f5").click(function(){
    $(this).fadeOut(600);
  });
  $("#f6").click(function(){
    $(this).fadeOut(600);
  });
  $("#f7").click(function(){
    $(this).fadeOut(600);
  });
  $("#f8").click(function(){
    $(this).fadeOut(600);
  });
  $("#f9").click(function(){
    $(this).fadeOut(600);
  });
  $("#book").click(function(){
    $("#blackblock").fadeIn();
    $("#note1").fadeIn(100);
    $("#note2").fadeIn(100);
    $("#newspaper").fadeIn(100);
    $("#wanted").fadeIn(100);
    $("#return").fadeIn(100);
    });
    $("#return").click(function(){
      $("#blackblock").hide();
      $("#note1").hide();
      $("#note2").hide();
      $("#newspaper").hide();
      $("#wanted").hide();
      $(this).hide();
      });
$("#heartjar").click(function(){
  $("#key").animate({
    top:'80px'
  })
  })
$("#key").click(function(){
  $(this).fadeOut(800);
  $("#chestdoor").animate({
    top:'234px',
  }, 3000, function() {
})
})
$("#stone").click(function(){
  $("#f7").animate({
    top:'510px',
    left:'985px'
  }, 450, function() {
});
  $("#f8").animate({
  top:'500px',
  left:'965px'
}, 300, function() {
});
  $("#f9").animate({
    top:'500px',
    left:'1010px'
  }, 600, function() {
  });
  })
$("#doodle").draggable();
$("#torn1").draggable();
$("#doodle").click(function() {
    $("#doodle2").fadeIn(300);
    $("#blackblock2").fadeIn(300);
  });
$("#doodle2").click(function() {
    $(this).fadeOut(300);
    $("#blackblock2").fadeOut(300)
  });
$("#torn1").click(function() {
    $("#torn1_2").fadeIn(300);
    $("#blackblock3").fadeIn(300);
    });
$("#torn1_2").click(function() {
    $(this).fadeOut(300);
    $("#blackblock3").fadeOut(300)
    });
$("#dairy").click(function(){
      $("#blackblock").fadeIn();
      $("#corner").fadeIn(100);
      $("#bible").fadeIn(100);
      $("#doodle").fadeIn(100);
      $("#torn1").fadeIn(100);
      $("#return").fadeIn(100);
      });
$("#return").click(function(){
        $("#blackblock").fadeOut(100);
        $("#corner").fadeOut(100);
        $("#bible").fadeOut(100);
        $("#doodle").fadeOut(100);
        $("#torn1").fadeOut(100);
        $(this).fadeOut(100);
        });
$("#photo").draggable();
$("#torn2").draggable();
$("#photo").click(function() {
  $("#photo2").fadeIn(300);
  $("#blackblock4").fadeIn(300);
  });
$("#photo2").click(function() {
  $(this).fadeOut(300);
  $("#blackblock4").fadeOut(300)
  });
$("#torn2").click(function() {
  $("#torn2_2").fadeIn(300);
  $("#blackblock5").fadeIn(300);
  });
$("#torn2_2").click(function() {
  $(this).fadeOut(300);
  $("#blackblock5").fadeOut(300)
  });
$("#toflowerball").click(function() {
  $("#flowerball").fadeIn(300);
  $(this).hide();
  $("#torn2").delay(800).animate({
    top:'534px',
  }, 50, function() {
  });
  $("#torn2").delay(30).effect("bounce", {
     times: 1
 }, 50);
  })
  $("#squidjar2").click(function(){
        $("#blackblock").fadeIn();
        $("#memorial").fadeIn(100);
        $("#photo").fadeIn(100);
        $("#torn2").fadeIn(100);
        $("#toflowerball").fadeIn(100);
        $("#return").fadeIn(100);
        });
  $("#return").click(function(){
          $("#blackblock").fadeOut(100);
          $("#memorial").fadeOut(100);
          $("#photo").fadeOut(100);
          $("#torn2").fadeOut(100);
          $("#toflowerball").fadeOut(100);
          $("#flowerball").fadeOut(100);
          $(this).fadeOut(100);
          });
$("#f8").click(function() {
  $("#squidjar2").show();
  });
$("#squidjar").click(function(){
  $("#blackblock").fadeIn(100);
  $("#denial").fadeIn(100);
  $("#return").fadeIn(100);
});
$("#return").click(function(){
        $("#blackblock").fadeOut(100);
        $("#denial").fadeOut(100);
        $(this).fadeOut(100);
});
$("#bearjar2").click(function(){
  $("#blackblock").fadeIn();
  $("#greeneye").fadeIn(100);
  $("#blueeye").fadeIn(100);
  $("#purpleeye").fadeIn(100);
  $("#darkeye").fadeIn(100);
  $("#browneye").fadeIn(100);
  $("#return").fadeIn(100);
  });
  $("#return").click(function(){
    $("#blackblock").hide();
    $("#greeneye").fadeOut(100);
    $("#blueeye").fadeOut(100);
    $("#purpleeye").fadeOut(100);
    $("#darkeye").fadeOut(100);
    $("#browneye").fadeOut(100);
    $("#samdiary").fadeOut(100);
    $("#marrydiary").fadeOut(100);
    $("#tomdiary").fadeOut(100);
    $("#janediary").fadeOut(100);
    $("#cristdiary").fadeOut(100);
    $(this).hide();
    });
    $("#match").click(function() {
      $("#bearjar2").show();
      $(this).fadeOut(100);
      });
    $("#bearjar").click(function(){
      $("#blackblock").fadeIn(100);
      $("#darkroom").fadeIn(100);
      $("#return").fadeIn(100);
    });
    $("#return").click(function(){
            $("#blackblock").fadeOut(100);
            $("#darkroom").fadeOut(100);
            $(this).fadeOut(100);
    });
    $("#matchcover").click(function(){
      $("#match").animate({
        top:'320px'
      })
      })
$("#blueeye").click(function() {
  $("#marrydiary").fadeIn();
  $(this).fadeOut(100);
  });
  $("#purpleeye").click(function() {
    $("#tomdiary").fadeIn();
    $(this).fadeOut(100);
    });
    $("#darkeye").click(function() {
      $("#samdiary").fadeIn();
      $(this).fadeOut(100);
      });
      $("#browneye").click(function() {
        $("#janediary").fadeIn();
        $(this).fadeOut(100);
        });
        $("#greeneye").click(function() {
          $("#cristdiary").fadeIn();
          $(this).fadeOut(100);
          });
$("#marrydiary").click(function() {
  $("#marrydiary2").fadeIn(300);
  $("#blackblock6").fadeIn(300);
  });
$("#marrydiary2").click(function() {
  $(this).fadeOut(300);
  $("#blackblock6").fadeOut(300)
  });
  $("#samdiary").click(function() {
    $("#samdiary2").fadeIn(300);
    $("#blackblock6").fadeIn(300);
    });
  $("#samdiary2").click(function() {
    $(this).fadeOut(300);
    $("#blackblock6").fadeOut(300)
    });
    $("#tomdiary").click(function() {
      $("#tomdiary2").fadeIn(300);
      $("#blackblock6").fadeIn(300);
      });
    $("#tomdiary2").click(function() {
      $(this).fadeOut(300);
      $("#blackblock6").fadeOut(300)
      });
      $("#janediary").click(function() {
        $("#janediary2").fadeIn(300);
        $("#blackblock6").fadeIn(300);
        });
      $("#janediary2").click(function() {
        $(this).fadeOut(300);
        $("#blackblock6").fadeOut(300)
        });
        $("#cristdiary").click(function() {
          $("#cristdiary2").fadeIn(300);
          $("#clicktoenter").fadeIn(300);
          $("#blackblock6").fadeIn(300);
          });
        $("#cristdiary2").click(function() {
          $(this).fadeOut(300);
          $("#clicktoenter").fadeOut(300);
          $("#blackblock6").fadeOut(300)
          });
          $("#start").click(function() {
            $(this).fadeOut(300);
            $("#blackblock7").fadeOut(300)
            $("#logo").fadeOut(300)
            });
            $("#musiccontrol").click(function(){
              $("#musichelper").fadeToggle(500);
              });
})
