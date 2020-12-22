/*
* @Author: 朱佳敏
* @Date:   2020-12-18
* @Last Modified by:   朱佳敏
* @Last Modified time: 2020-12-20
*/
function closeContent(x) {
    x.parentNode.style.display="none";
}
function openContent(x) {
    var t = document.getElementById("right");
    document.getElementById("content").style.display="block";
    document.getElementById("content_h5").innerHTML = t.getElementsByTagName("h5")[x].innerHTML;
    document.getElementById("content_span").innerHTML = t.getElementsByTagName("span")[x].innerHTML;
    document.getElementById("content_p").innerHTML = t.getElementsByTagName("p")[x].innerHTML;
}