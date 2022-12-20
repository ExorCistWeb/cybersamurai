function headerHide() {
    $('.headerHider').css('visibility', 'hidden');
  };
  
  
  $(window).scroll(() => {
    if($('.headerHider').css('visibility') === 'hidden') {
      $('.headerHider').css('visibility', 'visible');
    }
    else {
      
    }
  });