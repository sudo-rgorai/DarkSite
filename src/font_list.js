var values = [];

fetch('./fonts/font_list.json')
    .then(res => res.json())
    .then((out) => {
    for(i=0;i<1023;i++)
        {
            values.push(out.items[i].family);
        }
    })
    .catch(err => { throw err });

var select = document.getElementById('fonts');

function updateFont(){
    
    for (const val of values) {
      var option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      if(select.childElementCount < 1024)
        select.appendChild(option);
    }
    
    fontFamily = select.options[select.selectedIndex].value;
    fontlink(fontFamily);
}

function fontlink(fontFamily){
    var link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.gstatic.com';
    document.head.appendChild(link);

    var familylink = document.createElement('link');
    familylink.rel = 'stylesheet';
    familylink.href = "https://fonts.googleapis.com/css2?family="+fontFamily+"&display=swap";
    document.head.appendChild(familylink);

    document.getElementsByTagName('h1')[0].style.fontFamily = fontFamily;
    setCookie("font",fontFamily,365);
}
var settings = document.getElementById("settings");
settings.addEventListener('click',updateFont,false);