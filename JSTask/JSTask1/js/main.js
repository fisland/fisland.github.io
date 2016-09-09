var lastNumber = 0;
window.onload = function() {
	setInterval("randomChange()",1000);
}
function randomChange() {
	var lastColor = 'orange';
	
	var colorArr = ['red','green','blue'];
	var colorNameArr = ['红色','绿色','蓝色'];
	var colorRandomNum = Math.floor(Math.random()*3);
	var randomNum = Math.floor(Math.random()*9);
	
	var boxs = document.getElementsByClassName("box");
	var lastBox = boxs[lastNumber];
	lastBox.style.backgroundColor = lastColor;
	
	var box = boxs[randomNum];
	box.style.backgroundColor = colorArr[colorRandomNum];
	
	lastNumber = randomNum;
	randomNum++;
	console.log("第"+randomNum+"个"+"颜色:"+colorNameArr[colorRandomNum]);
}