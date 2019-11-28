$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $("#button-top").fadeIn();
    } else {
      $("#button-top").fadeOut();
    }
  });

  $("#button-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});
