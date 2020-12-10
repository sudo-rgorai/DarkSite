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
      
document.getElementById('fonts').onclick = function() {

    for (const val of values) {
      var option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option);
    }
    
    if(select.selectedIndex != 0)
    	var fontFamily = select.options[select.selectedIndex].value;
    
    document.querySelector('#quote').style.font = fontFamily;

    var link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.gstatic.com';
    document.head.appendChild(link);

    var familylink = document.createElement('link');
    familylink.rel = 'stylesheet';
    familylink.href = "https://fonts.googleapis.com/css2?family="+fontFamily+"&display=swap";
    document.head.appendChild(familylink);

    document.getElementsByTagName('h1')[0].style.fontFamily = fontFamily;
}