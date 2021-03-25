// var slideIndex = 3;
// showSlides(slideIndex);
// function plusSlides(n){
// 	showSlides(slideIndex +=n);
// }
// function currentSlide(n){
// 	showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   slides[slideIndex-1].style.display = "flex"; 
// }



// more
// var buttons = document.getElementsByClassName('tab-links');
// var moreText = document.getElementsByClassName("more");
// function showContent(){

// // for (var i = 0; i < buttons.length; i++) {
// //     buttons[i].addEventListener("click", function() {
// //         var cate = this.getAttribute('data-cate');
// //         console.log(cate)
// //         for (var i = 0; i < buttons.length; i++) {
// //             buttons[i].classList.remove("active");
// //         }
// //         this.className += " active";
// //         showContent(cate);
// //     });

// // }

// // function showContent(cate) {
// //     for (var i = 0; i < moreText.length; i++) {
// //         if (moreText[i].classList.contains(cate)) {
// //             moreText[i].style.display = 'block';
// //         } else {
// //             moreText[i].style.display = 'none';
// //         }
// //     }
// // }
// }

$(document).ready(function(){

 $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
 
 $( ".btn").on( "click", function( event ) {
  $( event.target ).siblings().toggleClass( "moreChange" );
});

});