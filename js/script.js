
$(document).ready(function () {

  $('.table').footable();


  //modal-add
  
  $(".modalbox").fancybox();
  $("#form-add").submit(function () {
      return false;
  });
  $("#form-add-btn").on("click", function () {

      // тут дальнейшие действия по обработке формы
      // закрываем окно, как правило делать это нужно после обработки данных
      $("#form-add").fadeOut("slow", function () {
          $(this).before("");
          setTimeout("$.fancybox.close()", 500);
      });
  });





  //request    
  $(".modalbox").fancybox();
  $("#request-form").submit(function () {
      return false;
  });



  //spoiler
  $('.answer-item__title').click(function (event) {
    if($('.answer-container').hasClass('one')){
        $('.answer-item__title').not($(this)).removeClass('activeA');
        $('.answer-item__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('activeA').next().slideToggle(300);
    
});





});
  