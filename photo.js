/*
* @Author: 朱佳敏
* @Date:   2020-12-18
* @Last Modified by:   朱佳敏
* @Last Modified time: 2020-12-20
*/
function closeContent(x) {
    x.parentNode.style.display="none";
    document.getElementById("content").style.display="none";
}
function openContent(x) {
    document.getElementById("content").style.display="block";
    document.getElementById("content_p").style.display="block";
    document.getElementById("content_p").getElementsByTagName("img")[0].src=document.getElementsByTagName("img")[x].alt;
}