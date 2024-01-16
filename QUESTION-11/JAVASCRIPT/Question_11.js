var currentdate = new Date();
var currentday = currentdate.getDay();

var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
 ]

document.querySelector("#day").innerHTML = "Today is : " + daylist[currentday];

var hours = currentdate.getHours();
var minutes = currentdate.getMinutes();
var seconds = currentdate.getSeconds();

var ampm = (hours >= 12) ? "PM" : "AM";
hours = hours >= 12 ? hours - 12 : hours;

document.querySelector("#time").innerHTML = "Current time is : " + hours + " " + ampm + " " +  ":" + " " + minutes + " " + ":" + " " + seconds;