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

  // fade in object on scroll in
  $(window).scroll(function(){
    $(".fadein").each(function(i){
      var obj_bottom = $(this).position().top + $(this).outerHeight();
      var win_bottom = $(this).scrollTop() + $(this).height();
      if( win_bottom > obj_bottom ) {
        setTimeout(() => {
          $(this).animate({'opacity': '1'}, 500);
        }, 1000);
      }
    });
  });

  $("a#slideBtn, div.modal-wrapper, span.closeBtn").click(function() {
    $("div.modal").toggleClass("showMode");
  });
});
