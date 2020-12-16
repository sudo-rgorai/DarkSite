window.onload = greet();
getCookie("color");
getCookie("font");
clock();
document.getElementById('favcolor').oninput = function(){
    setCookie("color",color_change(),365);
    getCookie("color");
}