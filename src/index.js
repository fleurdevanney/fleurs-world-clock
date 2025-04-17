setInterval(function () {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector("#date");
  let londonTimeElement = londonElement.querySelector("#time");

  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("dddd, Do MMMM");

  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("HH:mm:ss A");
}, 10);

setInterval(function () {
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector("#date");
  let madridTimeElement = madridElement.querySelector("#time");

  madridDateElement.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("dddd, Do MMMM");

  madridTimeElement.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("HH:mm:ss A");
}, 10);

setInterval(function () {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector("#date");
  let newYorkTimeElement = newYorkElement.querySelector("#time");

  newYorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("dddd, Do MMMM");

  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("HH:mm:ss A");
}, 10);
