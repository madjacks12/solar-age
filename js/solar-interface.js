import { Person } from './../js/solar.js';

$(document).ready(function(){
  $('#time').text(moment());
  $('#age-form').submit(function(event){
    event.preventDefault();
    let userAge = $('#birthDate').val();
    console.log(userAge);
    let userYear = (userAge.substring(0,4));
    console.log(userYear);
    let userMonth = (userAge.substring(5,7));
    console.log(userMonth);
    let userDay = (userAge.substring(8,10));
    console.log(userDay);
    let newPerson = new Person(userYear, userMonth, userDay);

  })
})
