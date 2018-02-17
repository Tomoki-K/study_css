$(document).ready(function() {
  $("ul#tabs a").click(function(){
    var secNum = $(this).attr("val");
    $(`div#sec${secNum}`)[0].scrollIntoView({
      behavior: "smooth"
    });
  });
});
