  // header
  var res480 = document.querySelector('.header-top');

window.addEventListener("scroll",function(){
  if (window.pageYOffset > 100)  {
    res480.classList.add('header-scroll');
    
  }
  else if (window.pageYOffset<=100) {
      res480.classList.remove('header-scroll');
    
  }
})