// 任务：task03
// 学号：2017011951
// 姓名：高予蜀

(function(d){
var titles = d.getElementsByClassName("tabtitle")[0].getElementsByTagName("div");
var items = d.getElementsByClassName("tab-item");

for(var i = 0; i < titles.length; i++){
    (function(j){
        titles[j].onmousemove = function(){
            for(var k = 0; k < titles.length; k++){
                titles[k].className = titles[k].className.replace(" active", "");
                items[k].style.display = "none";
            }
            titles[j].className = titles[j].className + " active";
            items[j].style.display = "block";
        } 
    })(i);
}
})(document);

(function(d){
    var name = d.getElementById("loginname");
    var pass = d.getElementById("pwd");

    name.onblur = function(){
        if(!name.innerText)
            alert("用户名不能为空");
    }

    pass.onblur = function(){
        if(!pass.innerText)
            alert("密码不能为空");
    }
})(document);


// 老师演示
// (function(d, w) {
//     var titleList = d.getElementsByClassName('login-tab');
//     var itemList = d.getElementsByClassName('tab-item');

//     for(var i = 0; i < titleList.length; i++) {
//         //titleList[i].onmouseover = function() {
//         //	alert(i); 2
//         //}
//         (function(j) {
//             titleList[j].onmouseover = function() {
//                 for(var m = 0; m < titleList.length; m++) {
//                     if(m == j) {
//                         titleList[j].classList.add("active"); // 切换标题
//                         itemList[j].style.display = "block"; // 切换标题下的内容
//                     }
//                     else {
//                         titleList[m].classList.remove("active");
//                         itemList[m].style.display = "none";
//                     }
//                 }
//             }
//         })(i);
//     }
// })(document, window);

// /*
//     表单验证
// */
// (function(d, w) {

// })(document, window);
