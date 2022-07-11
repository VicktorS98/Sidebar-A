$(document).ready(function() {
  $("#checkbox-theme").prop("checked", false);
  $("button").toggleClass("light-btn");
});



$(".item").click(function(){
    console.log("asd");
    $(".item").removeClass("active");
    $(this).addClass("active");
});

$(".slider").click(function() {
  $("button").toggleClass("light-btn");$("button").toggleClass("dark-btn");
  $(".sidebar").toggleClass("dark");
  $(".item").toggleClass("dark");
  $(".user-data").toggleClass("dark");
  $(".wheel").toggleClass("dark");
  $(".user-panel").toggleClass("dark");
});

$(".toggle-button").click(function() {
  $(".section-sidebar").toggleClass("active");
  $(".toggle-button").toggleClass("active");
  $(".middle-bar").toggleClass("active");
  $(".sidebar").toggleClass("active");
  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
  });
  if (!$(".sidebar").hasClass("active")) {
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
  }
});
