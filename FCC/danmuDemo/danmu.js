/**
 * Created by fisland on 2016/12/4.
 */
var config = {
    authDomain:"fcc-danmu123456.wilddog.com",
    syncURL:"https://fcc-danmu123456.wilddogio.com"
};
wilddog.initializeApp(config);
var ref = wilddog.sync().ref(),
    arr = [];


$("#btn-sub").click(function () {
    var text = $("input[type=text]").val();
    if (text.length == 0){
        alert("请先输入弹幕信息");
    };
    ref.child("messages").push(text);
    $("input[type=text]").val('');
});

$("input[type=text]").keypress(function (event) {
    if (event.keyCode == "13"){
        $("#btn-sub").trigger("click");
    }
});

$("#btn-del").click(function () {
    arr = [];
    ref.child("messages").remove();
    $(".dm-show").empty();
});

ref.child('messages').on("child_added",function (snapshot) {
    var text = snapshot.val();
    arr.push(text);

    var messageDiv = $("<div class='dm-message'></div>");
    messageDiv.text(text);
    $(".dm-show").append(messageDiv);
    moveMessageDiv(messageDiv);

});

ref.on("child_removed",function (snapshot) {

    arr = [];
    $(".dm-show").empty();
});
var topMin = $('.dm-mask').offset().top;
var topMax = topMin + $('.dm-mask').height();
var _top = topMin;
var leftMax = $('.dm-mask').offset().left;

var  moveMessageDiv = function (obj) {
    var _left = $('.dm-mask').width() - obj.width()+leftMax;
    _top = _top + 50;
    if (_top > topMax - 50){
        _top = topMin;
    };
    obj.css({
        left:_left,
        top:_top,
        color:getRandomColor()
    });
    var  time = 5000 + 10000*Math.random();
    obj.animate({
        left:leftMax,
    }, time, "linear", function () {
        obj.remove();
    });
};
var getRandomColor = function(){
    return  '#' +
        (function(color){
            return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
            && (color.length == 6) ?  color : arguments.callee(color);
        })('');
};

var getAndRun = function(){
    if (arr.length > 0){
        //获取数组随机值
        var n = Math.floor(Math.random() * arr.length + 1) - 1;
        var textObj = $("<div>"+arr[n]+"</div>");
        $(".dm-show").append(textObj);
        moveMessageDiv(textObj);
    };
    setTimeout(getAndRun,3000);
};

jQuery.fx.interval = 50;
getAndRun();
changeColor();

