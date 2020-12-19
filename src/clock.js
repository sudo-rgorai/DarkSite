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
  
    const time = time_format();
    const dateTime = `${dayWord} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${date} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${time}`;
    document.querySelector(".date").innerHTML = dateTime;
    document.querySelector(".date").style.fontSize = "1rem";
    document.querySelector(".date").style.fontWeight = "50";
    document.querySelector(".date").style.marginTop = "25px";
    setTimeout(clock, 1000);
}

var format = document.getElementById('third-level-menu');
  format.addEventListener('change', timeChange, false);

function timeChange(){
  num = format.options[format.selectedIndex].value;
  setCookie("time",num,365);
}

function time_format(){
  var today = new Date();
  var hours = today.getHours();

  num = getCookie("time");
  if(num==24)
  {
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  }
  else if(num==12)
  {
    if(hours==0)
      var time = "12:" + today.getMinutes() + ":" + today.getSeconds() + " AM";

    else if(hours<12)
    {
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " AM";
    }
  
    else if(hours>12)
    {
      var time = today.getHours()-12 + ":" + today.getMinutes() + ":" + today.getSeconds() + " PM";
    }
    else time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " PM";
  }

  return time;
}