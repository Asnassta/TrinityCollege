$(document).ready(function() {

  /*======Menu-toggle=============*/
  
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header-menu").toggleClass('active');
    $('body').toggleClass('hidden');
  });
  /*==========/menu-toggle=========*/

  /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;

      $(".header-menu").removeClass('active');
      $(".burger").removeClass('active');
      $('body').removeClass('hidden');
 
    $("html, body").animate ({
      scrollTop: blockOffset 
    }, 500);
  });
/*=========/smooth scroll=============*/

/*===========Video-btn========*/
  $('.reviews__video').on("click", function() {
   $(this).toggleClass('active');
 }); 
/*===========/video-btn========*/

 /*==========Label===========*/
 $('.consultation-form__item select').on('change', function() {
 

 if($(this).val() == 0)
 {
   $(this).removeClass('active');
 }
 else
 {
   $(this).addClass('active');
 }

});


 $('.consultation-form__item input, .consultation-form__item textarea').on('input', function() {
 

 if($(this).val().length == 0)
 {
   $(this).removeClass('active');
 }
 else
 {
   $(this).addClass('active');
 }

});
 /*==========label===========*/

  

	
});