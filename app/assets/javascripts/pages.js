$(document).ready( function(){
  $(".footer").on("click", ".footer-link-to-top", function(event){
    $('body').animate({
      'scrollTop' : $(".navbar").offset().top
    }, 800);
  });
});
