import { Person } from './../js/solar.js';


describe ('Person', function () {

  it('should return a persons correct age as a year', function() {
    let testPerson = new Person(1991, 3, 30, 2018, 2, 9)
    expect(testPerson.convertToSeconds()).toEqual(27);
  });

  it('should return a persons correct age on Mercury', function() {
    let testPerson = new Person(1991, 3, 30, 2018, 2, 9)
    expect(testPerson.convertToMercury()).toEqual('112.50');
  });

  it('should return a persons correct age on Venus', function() {
    let testPerson = new Person(1991, 3, 30, 2018, 2, 9)
    expect(testPerson.convertToVenus()).toEqual('43.55');
  });

  it('should return a persons correct age on Mars', function() {
    let testPerson = new Person(1991, 3, 30, 2018, 2, 9)
    expect(testPerson.convertToMars()).toEqual('14.36');
  });

  it('should return a persons correct age on Jupiter', function() {
    let testPerson = new Person(1991, 3, 30, 2018, 2, 9)
    expect(testPerson.convertToJupiter()).toEqual('2.28');
  });


});
