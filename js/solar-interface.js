import { Person } from './../js/solar.js';

$(document).ready(function(){
  let time = moment(new Date()).format("DD/MM/YYYY");
  let currentDay = parseInt((time.substring(0,2)));
  let currentMonth = parseInt((time.substring(3,5)));
  let currentYear = parseInt((time.substring(6,10)));
  $('#age-form').submit(function(event){
    event.preventDefault();
    let userAge = $('#birthDate').val();
    let userLifeExpectancy = parseInt($('#lifeExpectancy').val());
    let userYear = parseInt((userAge.substring(0,4)));
    let userMonth = parseInt((userAge.substring(5,7)));
    let userDay = parseInt((userAge.substring(8,10)));
    let newPerson = new Person(userYear, userMonth, userDay, userLifeExpectancy, currentYear, currentMonth, currentDay);
    console.log(newPerson.convertToSeconds());
    //age on planets
    $("#age-results").append("<h4>" + "You are " + newPerson.convertToMercury()  + " Years old on Mercury!"+ "<h4>" + "<br>");

    $("#age-results").append("<h4>" + "You are " + newPerson.convertToVenus()  + " Years old on Venus!"+ "<h4>" + "<br>");

    $("#age-results").append("<h4>" + "You are " + newPerson.convertToMars()  + " Years old on Mars!"+ "<h4>" + "<br>");

    $("#age-results").append("<h4>" + "You are " + newPerson.convertToJupiter()  + " Years old on Jupiter!"+ "<h4>" + "<hr>" + "<br>");
    // life expectancy
    if (newPerson.convertToSeconds() < userLifeExpectancy) {
        $("#expectancy-results").append("<h4>" + "You have " + newPerson.mercuryYearsLeft()  + " Years to live before you die on Mercury!" + "<h4>" + "<br>");
      } else {
        $("#expectancy-results").append("<h4>You've already exceeded your life Expectancy!</h4>");
      }
    if (newPerson.convertToSeconds() < userLifeExpectancy) {
          $("#expectancy-results").append("<h4>" + "You have " + newPerson.venusYearsLeft()  + " Years to live before you die on Venus!"+ "<h4>" + "<br>");
        } else {
        }

    if (newPerson.convertToSeconds() < userLifeExpectancy) {
          $("#expectancy-results").append("<h4>" + "You have " + newPerson.marsYearsLeft()  + " Years to live before you die on Mars!"+ "<h4>" + "<br>");
    } else {
    }

  if (newPerson.convertToSeconds() < userLifeExpectancy) {
        $("#expectancy-results").append("<h4>" + "You have " + newPerson.jupiterYearsLeft()  + " Years to live before you die on Jupiter!"+ "<h4>");
    } else {
    }

  });
});
