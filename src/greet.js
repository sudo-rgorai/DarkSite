
function greet() {
    const url = window.location.href;
    const present = url.search("=");
  
    if (present != -1) {
      const elements = url.split("=");
      document.cookie = `username=${elements[1]};expires=Fri, 24 Apr 2030 00:00:00 UTC;`;
      this.document.cookie = "";
    }
    if (document.cookie.length == 0) {
      window.open("user.html", "_parent", "", "");
    } else {
      const name = document.cookie.split("=")[1];
      const myDate = new Date();
      const hrs = myDate.getHours();
      let message;
      if (hrs >= 2 && hrs < 12)
        message = `Good Morning, ${name}!`;
      else if (hrs >= 12 && hrs <= 17)
        message = `Good Afternoon, ${name}!`;
      else if (hrs >= 17 && hrs <= 20)
        message = `Good Evening, ${name}!`;
      else
        message = `Welcome Back, ${name}!`;
  
      document.getElementById("greet").innerHTML = message;
    }
  
    fetch('assets/quotes.txt')
    .then(response => response.text())
    .then(data => {
      const res = data.split("\n");
      document.getElementById('quote').textContent = res[Math.floor((Math.random()*50)+1)];
    });
  };
  