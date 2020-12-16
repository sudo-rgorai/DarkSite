function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname+"=";
    var ca = document.cookie.split(';');
  
    for(i=0;i<ca.length;i++)
    {
      while (ca[i].charAt(0) == ' ') {
      ca[i] = ca[i].substring(1);
      }
  
      if (ca[i].indexOf(name) == 0) {
        cvalue = ca[i].substring(name.length, ca[i].length);
        
        if(name=="color="){
          if(document.getElementById('favcolor')!=null)
            document.getElementById('favcolor').value = cvalue;
          document.getElementsByTagName('body')[0].style.backgroundColor = cvalue;
        }
        else if(name=="username=")
          return cvalue;
  
        else if(name=="font="){
          fontlink(cvalue);
        }
        else if(name=="time="){
          return cvalue;
        }
      }
    }
  }