window.onload = function () {
  var url = window.location.href;
  console.log(url);
  var present = url.search("=");
  console.log(present);

  if (present != -1) {
    var elements = url.split("=");
    console.log(elements[1]);
    document.cookie =
      "username=" + elements[1] + ";expires=Fri, 24 Apr 2030 00:00:00 UTC;";
    this.document.cookie = "";
    console.log(this.document.cookie);
  }
  console.log(document.cookie);
  if (document.cookie.length == 0) {
    window.open("user.html", "_parent", "", "");
  } else {
    var name = document.cookie.split("=")[1];
    console.log(name);
    var message = "Hi " + name + "!";
    console.log(message);
    document.querySelector("h1").innerHTML = message;
  }

  fetch('quotes.txt')
  .then(response => response.text())
  .then(data => {
    var res = data.split("\n");
    document.getElementById('quote').textContent = res[Math.floor((Math.random()*50)+1)];
  });
};

function clock() {
  var today = new Date();
  var date = today.getDate();
  if (date % 10 == 1) date = date + "st";
  else if (date % 10 == 2) date = date + "nd";
  else if (date % 10 == 3) date = date + "rd";
  else date = date + "th";
  var month = today.getMonth() + 1;
  var monthWord;
  switch (month) {
    case 1:
      monthWord = "January";
      break;
    case 2:
      monthWord = "February";
      break;
    case 3:
      monthWord = "March";
      break;
    case 4:
      monthWord = "April";
      break;
    case 5:
      monthWord = "May";
      break;
    case 6:
      monthWord = "June";
      break;
    case 7:
      monthWord = "July";
      break;
    case 8:
      monthWord = "August";
      break;
    case 9:
      monthWord = "September";
      break;
    case 10:
      monthWord = "October";
      break;
    case 11:
      monthWord = "November";
      break;
    case 12:
      monthWord = "December";
      break;
  }

  var day = today.getDay();
  var dayWord;
  switch (day) {
    case 0:
      dayWord = "Sunday";
      break;
    case 1:
      dayWord = "Monday";
      break;
    case 2:
      dayWord = "Tuesday";
      break;
    case 3:
      dayWord = "Wednesday";
      break;
    case 4:
      dayWord = "Thursday";
      break;
    case 5:
      dayWord = "Friday";
      break;
    case 6:
      dayWord = "Saturday";
      break;
  }

  var date = date + " " + monthWord + " " + today.getFullYear();

  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = `${dayWord} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${date} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${time}`;
  document.querySelector(".date").innerHTML = dateTime;
  document.querySelector(".date").style.fontSize = "1rem";
  document.querySelector(".date").style.fontWeight = "50";
  document.querySelector(".date").style.marginTop = "25px";
  setTimeout(clock, 1000);
}
clock();
