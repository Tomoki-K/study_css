$(document).ready(function() {

  // scroll section into view
  $("ul#tabs a").click(function(){
    var secNum = $(this).attr("val");
    $(`div#sec${secNum}`)[0].scrollIntoView({
      behavior: "smooth"
    });
    if ($("ul#tabs").hasClass("showMode")){
      setTimeout(function() {
        $("ul#tabs, div#hamburger").toggleClass("showMode");
      }, 500);
    }
  });

  // responsive hamburger menu
  $("div#hamburger").click(function(){
    $("ul#tabs, div#hamburger").toggleClass("showMode");
  });
  $("div.section").click(function(){
    if ($("ul#tabs").hasClass("showMode")){
      $("ul#tabs, div#hamburger").toggleClass("showMode");
    }
  });
});
