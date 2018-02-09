import { Person } from './../js/solar.js';

$(document).ready(function(){
  $('#time').text(moment());
  $('#age-form').submit(function(event){
    event.preventDefault();
    let userAge = $('#birthDate').val();
    console.log(userAge);
    let newPerson = new Person(userYear, userMonth, userDay);

  })
})
