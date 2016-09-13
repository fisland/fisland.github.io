/**
 * Created by fisland on 16/9/13.
 */

var lastNumber = 0;
var dialList = document.getElementsByClassName("dial_item");
var oColor = "#ffd7da";
var nColor = "#ffbc64";
/**
 *点击事件
 */
function addEventHandle(ele,event,handle) {
    if(ele.addEventListener){
        ele.addEventListener(event,handle,false);
    }
    else if(ele.attachEvent){
        ele.attachEvent('on'+event,handle);
    }
    else {
        ele['on'+event] = handle;
    }
}

function init() {
    var gobutton = document.getElementById("go_btn");
    addEventHandle(gobutton,"click",function () {
        setInterval("randomChange()",1000);
    });
    
}
function randomChange() {
    var randomNum = Math.floor(Math.random()*9);
    var lastDialItem = dialList[lastNumber];
    lastDialItem.className = lastDialItem.className.replace(/active/, "");
    // lastDialItem.style.background = oColor;

    var dialItem = dialList[randomNum];
    // dialItem.style.background = nColor;
    dialItem.className += " active";

    lastNumber = randomNum;
}
init();