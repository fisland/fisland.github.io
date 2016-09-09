window.onload = function () {
	var carousel = document.querySelector(".carousel");
	var imgs = carousel.querySelectorAll("div");
	var len = imgs.length;
	
	[].forEach.call(imgs,function (item) {
		item.style.width = (100/len)+"%";
	})
	carousel.style.left = "0%";
	carousel.style.width = (100*len)+"%";
	
	var pre = document.querySelector(".pre");
	var next = document.querySelector(".next");
	var i = 0;
	next.onclick = function () {
		var left = carousel.style.left;
		if (i < len-1){
			carousel.style.left = (parseInt(left) - 100)+"%";
			i++;
		}
		else if(i == len-1){
			carousel.style.left = "0%"
			i = 0;
		}
	}
	pre.onclick = function () {
		var left = carousel.style.left;
		if (i>0) {
			carousel.style.left = (parseInt(left)+100)+"%";
			i--;
		} else if(i == 0){
			carousel.style.left = - parseInt(carousel.style.width)+100+"%";
			i = len-1;
		}
	}
}