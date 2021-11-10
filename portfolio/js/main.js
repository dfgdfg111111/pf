$(document).ready(function(){  
  
   
   var menuItem = $ ('#nav li a'); //메뉴 버튼을 변수로

   $menuItem.click(function(){
     
      $('this').addClass('on');
      $('this').parent().sibilings().find('a').removeClass('on'); 
      
      var el = $(this).attr('href'); //클린한 adml a의 속성값을 변수에 넣는다.
      var $el = $(el);
      var headerH = $('header').height() //헤더의 세로길이를 변수에 넣는다.
      
      console.log($el);
   
      //scrollTop($el);

      
     }); 
     
   var Wheight = $(window).height(1200); // 열린 창의 세로길이를 구해서 변수에 넣는다
      console.log(Wheight);
  
      $('section').css('height', Wheight); // 위에서 구한 세로길이로 section의 height값 설정
  

   //모바일 크기로 새창 띄우기
  
   




   //화면 제일 위로 올라가게 하는 topBtn버튼
   $('.backTop').on('click',function(){
      $('html,body').animate({scrollTop:0},1000,'swing');
   });





});





  
      



