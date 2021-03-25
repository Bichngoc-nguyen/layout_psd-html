// countdown
// đếm ngược
    var countDownDate = new Date("Nov 30, 2020 15:37:25").getTime();
    // update đếm ngược sau 1s
    var x = setInterval(function(){

        //  get ngày và time
        var now = new Date().getTime();
        //  find the distance between now and count down date
        var distance = countDownDate - now;
        //  time calculations for days, hours , min, sec
        var day = Math.floor(distance /(1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
        var min = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));
        var sec = Math .floor((distance % (1000* 60)) / 1000 );
        // checktime
        min = checkTime(min);
        sec = checkTime(sec);
        // output theo id
        document.getElementById("day").innerHTML = day;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("min").innerHTML = min ;
        document.getElementById("sec").innerHTML = sec;

        // nếu đếm đến 0 thì sẽ hiện text
        if(distance < 0){
            clearInterval(x);
            document.getElementById("day").innerHTML = "EXPIRED";
            document.getElementById("hours").innerHTML = "EXPIRED";
            document.getElementById("min").innerHTML = "EXPIRED" ;
            document.getElementById("sec").innerHTML = "EXPIRED";
        }
        function checkTime(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
          }
    }, 1000);
    
    // form
    function signup(){
      var user = document.user.value;
      var email = document.email.value;
      var phone = document.phone.value;

      if(user != ""|| email != "" ||phone != ""){
        document.getElementById("ruselt").innerHTML = "nhập đầy đủ thông tin";
      }else{
        document.getElementById("ruselt").innerHTML = "ok"
      }
    }
    
    // menu courses
    document.addEventListener("DOMContentLoaded" , function(){

      var btn = document.querySelectorAll(".menu-courses ul li");
      var content = document.getElementsByClassName("col-content");
      var iconshow = document.getElementsByClassName("iconshow");
      var icon = document.getElementsByClassName("icon");
      for(let i=0; i<btn.length; i++){
        btn[i].addEventListener('click', function(event){

          event.preventDefault();
          for(let j = 0; j< btn.length; j++){
            btn[j].classList.remove("active");
          }
          this.classList.add("active")
        
          
          // lấy nội dung ra
          var showcontent = this.getAttribute("data-show");

          if(showcontent == "all"){
            for (let k = 0; k < content.length; k++) {
              content[k].classList.add('show');
              
          }
          }
          else{
            for(let k=0; k< content.length; k++){
              if(content[k].classList.contains(showcontent)){
                
                // for(let l = 0; l < iconshow.length; l++){
                  // for(let m=0; m< price.length; m++ ){
                  content[k].classList.add("show");
                  //   price[m].classList.add("price-active");
                  // }
                  // iconshow[l].classList.add("iconshows");
                 
                }
                
              // }
              else{
                content[k].classList.remove("show");
              }
            }
          }

        })
      }
    }, false)