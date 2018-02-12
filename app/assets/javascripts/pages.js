$(document).ready( function(){
  $(".mobile").on("click", ".fa-bars", function(){
    $(".overlay").show();
    $(".modal-parent").show();
    $(".fa-bars").hide();
  });

  $(".top-right").on("click", ".fa-times-circle", function(){
    $(".overlay").hide();
    $(".modal-parent").hide();
    $(".fa-bars").show();
  });

  $(".content").on("mouseover", ".image", function(){
    $(".description").fadeOut(100);
    integer = $(this).data("number");
    $("." + integer).fadeIn(100);
  });

  $(".content").on("mouseout", ".image", function(){
    $(".description").fadeOut(100);
  });
});
