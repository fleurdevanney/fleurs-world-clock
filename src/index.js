let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector("#date");
let londonTimeElement = londonElement.querySelector("#time");

londonDateElement.innerHTML = moment()
  .tz("Europe / London")
  .format("dddd, Do MMMM");

londonTimeElement.innerHTML = moment().tz("Europe/London").format("HH:mm:ss A");

let madridElement = document.querySelector("#madrid");
let madridDateElement = londonElement.querySelector("#date");
let madridTimeElement = londonElement.querySelector("#time");

madridDateElement.innerHTML = moment()
  .tz("Europe / Madrid")
  .format("dddd, Do MMMM");

madridTimeElement.innerHTML = moment().tz("Europe/Madrid").format("HH:mm:ss A");
