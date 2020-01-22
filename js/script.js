
$(document).ready(function () {

  $('.table').footable();

  $(".modalbox").fancybox();





 //modal-form-add
  
 $(".modalbox").fancybox();
 $("#form-add").submit(function () {
     return false;
 });
 $("#form-add-btn-close").on("click", function () {

     // тут дальнейшие действия по обработке формы
     // закрываем окно, как правило делать это нужно после обработки данных
     $("#form-add").fadeOut("slow", function () {
         $(this).before("");
         setTimeout("$.fancybox.close()", 500);
     });
 });


 // modal-form-top

 $(".modalbox").fancybox();
 $("#form-top").submit(function () {
     return false;
 });
 $("#form-top-btn-close").on("click", function () {

     // тут дальнейшие действия по обработке формы
     // закрываем окно, как правило делать это нужно после обработки данных
     $("#form-top").fadeOut("slow", function () {
         $(this).before("");
         setTimeout("$.fancybox.close()", 500);
     });
 });

  // modal-request

  $(".modalbox").fancybox();
  $("#request-form").submit(function () {
      return false;
  });
  $("#request-form-btn-close").on("click", function () {
 
      // тут дальнейшие действия по обработке формы
      // закрываем окно, как правило делать это нужно после обработки данных
      $("#request-form").fadeOut("slow", function () {
          $(this).before("");
          setTimeout("$.fancybox.close()", 500);
      });
  });


// modal-quest

$(".modalbox").fancybox();
$("#quest-form").submit(function () {
    return false;
});
$("#quest-form-btn-close").on("click", function () {

    // тут дальнейшие действия по обработке формы
    // закрываем окно, как правило делать это нужно после обработки данных
    $("#quest-form").fadeOut("slow", function () {
        $(this).before("");
        setTimeout("$.fancybox.close()", 500);
    });
});




  //spoiler
  $('.answer-item__title').click(function event () {
    if($('.answer-container').hasClass('one')){
        $('.answer-item__title').not($(this)).removeClass('activeA');
        $('.answer-item__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('activeA').next().slideToggle(300);
    
});

//picker

});
  