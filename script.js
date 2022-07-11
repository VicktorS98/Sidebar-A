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
  $(".logo-light").toggleClass("hidden");
  $(".logo-dark").toggleClass("hidden");
});

$(".toggle-button").click(function() {
  $(".toggle-button").toggleClass("active");
  $(".middle-bar").toggleClass("active");
  $(".sidebar").toggleClass("active");
  // acá puede ir para que el usuario no pueda scrollear con el sidebar abierto
});


  /* $('html, body').css({
    overflow: 'hidden',
    height: '100%'
  });
  if (!$(".sidebar").hasClass("active")) {
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
  } */
