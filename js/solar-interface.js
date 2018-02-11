import { Person } from './../js/solar.js';

$(document).ready(function(){
  let time = moment(new Date()).format("DD/MM/YYYY")
  let currentDay = parseInt((time.substring(0,2)));
  let currentMonth = parseInt((time.substring(3,5)));
  let currentYear = parseInt((time.substring(6,10)));
  $('#age-form').submit(function(event){
    event.preventDefault();
    let userAge = $('#birthDate').val();
    console.log(userAge);
    let userYear = parseInt((userAge.substring(0,4)));
    let userMonth = parseInt((userAge.substring(5,7)));
    let userDay = parseInt((userAge.substring(8,10)));
    let newPerson = new Person(userYear, userMonth, userDay, currentYear, currentMonth, currentDay);
    newPerson.convertToSeconds();
    let lifeExpectancy = $('#lifeExpectancy').val();
    console.log(newPerson.convertToMars());

  })
})
