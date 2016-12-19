/**
 * Created by fisland on 2016/12/7.
 */
var config = {
    authDomain: "fcc-danmu123456.wilddog.com",
    syncURL: "https://fcc-danmu123456.wilddogio.com"
};
wilddog.initializeApp(config);

var ref = wilddog.sync().ref();
var arr = [];

$("#btn-sub").click(function () {
    var text = $("input[type='text']").val();
    if (text.length == 0){
        alert("请先输入弹幕信息");
    };
    ref.child("message").push(text);
    $("input[type='text']").val('');


});
$("input[type='text']").keypress(function (event) {
    if (event.keyCode == "13"){
        $("#btn-sub").trigger("click");
    }
});

$("#btn-del").click(function () {
    arr = [];
    ref.child("message").remove();
    $(".dm-show").empty();
});


var topMin = $(".dm-mask").offset().top,
    topMax = topMin + $(".dm-mask").height(),
    leftMax = $(".dm-mask").offset().left,
    _top = topMin;


var moveObj = function (obj) {
    var _left = $(".dm-mask").width() - obj.width() + leftMax;
    _top += 50;
    if (_top > topMax - 50){
        _top = topMin;
    };
    obj.css({
        left:_left,
        top:_top,
        color:getRandomColor()
    });

    var time = 6000 + 10000*Math.random();
    obj.animate({left:leftMax},time,"linear",function () {
        obj.remove();
    });
};

ref.child("message").on('child_added', function(snapshot) {
    var text = snapshot.val();
    arr.push(text);

    var textDiv = $("<div></div>>");
    textDiv.text(text);
    $(".dm-show").append(textDiv);
    moveObj(textDiv);
});

ref.on('child_removed', function() {
    arr = [];
    $(".dm-show").empty();
});
var getRandomColor = function(){
    return  '#' +
        (function(color){
            return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
            && (color.length == 6) ?  color : arguments.callee(color);
        })('');
};

var getAndRun = function () {
    if (arr.length > 0 ){
        var n = Math.floor(Math.random() * arr.length + 1) - 1;
        var textDiv = $("<div>"+arr[n]+"</div>>");
        $(".dm-show").append(textDiv);
        moveObj(textDiv);
    };
    setTimeout(getAndRun,3000);
};

jQuery.fx.interval = 50;
getAndRun();