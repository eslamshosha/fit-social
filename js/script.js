let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {

  //phone size menu onclick
  $("#menu-id").click(function (e) {
    e.preventDefault();
    $(".navgition").toggleClass("reset-left");
    $("body").toggleClass("overflow");
  });
  $(".nav-head .close-menu").click(function () {
    $(".navgition").removeClass("reset-left");
    $("body").removeClass("overflow");
  });
  if ($(window).width() <= 1199) {
    //slide down menu
    $(".lang-anchor .lang-cont").click(function (e) {
      e.preventDefault();
      $(this).siblings(".dropdown-content").slideToggle(400);
    });
    $(".close-menu").click(function (e) {
      e.preventDefault();
      $(".lang-anchor .lang-cont").siblings(".dropdown-content").slideUp(400);
    });
  }
  
});