
document.addEventListener('DOMContentLoaded',function(tagname){
    var nut = document.querySelectorAll(".menu ul li");
    var nd = document.getElementsByClassName('content-money');


	//sử dụng for điều kiển all các nút
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(event){

            event.preventDefault();
			
			// khi một nút được click thì các cái khác pải tắt đi
				for (var j = 0; j < nut.length; j++) {
                    console.log(nut[j]);
					nut[j].classList.remove('active');
				}
				//đối tượng được click thành màu trắng
				this.classList.toggle('active');
				//lấy nôi dung ra hiển thị
                var ndhienthi= this.getAttribute('data-hienthi');

                if(ndhienthi == 'all') {
                    for (let k = 0; k < nd.length; k++) {
                        nd[k].classList.add('show');
                    }
                } else {
                    for (let k = 0; k < nd.length; k++) {
                        //  contains kiểm tra class có nằm trong element này hay ko
                        if(nd[k].classList.contains(ndhienthi)) {
                            
                            nd[k].classList.add('show');
                        } else {
                            nd[k].classList.remove('show');
                        }
                    }
                
                }
        
		 
        });
    }


},false)