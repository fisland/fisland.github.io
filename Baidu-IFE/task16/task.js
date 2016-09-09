/**
 * Created by fisland on 16/8/29.
 */

/**
 * 定义一些正则表达式，用于城市还有空气质量指数的匹配
 */


var regCity = /^[\u4e00-\u9fa5a-zA-Z\/\(\)]+$/;
var regData = /[0-9]/;
//去除两边空格
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = document.getElementById("aqi-city-input").value;
    var cityValue = document.getElementById("aqi-value-input").value;

    if(!regCity.test(trim(city))){
        alert("用户输入的城市名必须为中英文字符");
    }
    else if(!regData.test(trim(cityValue))){
        alert("用户输入的空气质量指数必须为整数");
    }
    else {
        aqiData[city] = cityValue;
    }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    
    var table = document.getElementById("aqi-table");
    if (Object.prototype.isPrototypeOf(aqiData) && Object.keys(aqiData).length === 0){
        table.innerHTML = "";
    }
    else {
        table.innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
        var html = "";
        for (var item in aqiData){
            html += "<tr><td>"+item+"</td><td>"+aqiData[item]+"</td><td><button>删除</button></td></tr>"
        }
        table.innerHTML += html;
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();

}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
    // do sth.
    var city = event.target.parentNode.parentNode.firstChild.innerHTML;
    delete aqiData[city];

    renderAqiList();

}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var add_btn = document.getElementById("add-btn");
    add_btn.addEventListener("click",addBtnHandle);

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var tableList = document.getElementById("aqi-table");
    tableList.addEventListener("click", delBtnHandle);
}

init();