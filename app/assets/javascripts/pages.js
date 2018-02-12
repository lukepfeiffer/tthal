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
});
