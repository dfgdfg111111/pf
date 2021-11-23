$(document).ready(function(){  
  
   
   var menuItem = $ ('#nav li a'); //메뉴 버튼을 변수로

   $menuItem.click(function(){
     
      $('this').addClass('on');
      $('this').parent().sibilings().find('a').removeClass('on'); 
      
      var el = $(this).attr('href'); 
      var $el = $(el);
      var headerH = $('header').height() 
      
      console.log($el);
        
      
     }); 
     
   var Wheight = $(window).height(1200);
      console.log(Wheight);
  
      $('section').css('height', Wheight); 

   

   //화면 제일 위로 올라가게 하는 topBtn버튼
   $('.backTop').on('click',function(){
      $('html,body').animate({scrollTop:0},1000,'swing');
   });





});





  
      



