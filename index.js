window.onload = function() {
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

function clock() {
  const today = new Date();
  var date = today.getDate();
  if (date % 10 == 1)
    date = `${date}st`;
  else if (date % 10 == 2)
    date = `${date}nd`;
  else if (date % 10 == 3)
    date = `${date}rd`;
  else
    date = `${date}th`;
  const month = today.getMonth() + 1;
  let monthWord;
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

  const day = today.getDay();
  let dayWord;
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

  var date = `${date} ${monthWord} ${today.getFullYear()}`;

  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${dayWord} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${date} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${time}`;
  document.querySelector(".date").innerHTML = dateTime;
  document.querySelector(".date").style.fontSize = "1rem";
  document.querySelector(".date").style.fontWeight = "50";
  document.querySelector(".date").style.marginTop = "25px";
  setTimeout(clock, 1000);
}
clock();