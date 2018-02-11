import { Person } from './../js/solar.js';


describe ('Person', function () {

  it('should return a persons correct age as a year', function() {
    let testPerson = new Person(1991, 3, 30, 80, 2018, 2, 9)
    expect(testPerson.convertToSeconds()).toEqual(27);
  });

  it('should return a persons correct age on Mercury', function() {
    let testPerson = new Person(1991, 3, 30, 80, 2018, 2, 9)
    expect(testPerson.convertToMercury()).toEqual('112.50');
  });

  it('should return a persons correct age on Venus', function() {
    let testPerson = new Person(1991, 3, 30, 80, 2018, 2, 9)
    expect(testPerson.convertToVenus()).toEqual('43.55');
  });

  it('should return a persons correct age on Mars', function() {
    let testPerson = new Person(1991, 3, 30, 80, 2018, 2, 9)
    expect(testPerson.convertToMars()).toEqual('14.36');
  });

  it('should return a persons correct age on Jupiter', function() {
    let testPerson = new Person(1991, 3, 30, 80, 2018, 2, 9)
    expect(testPerson.convertToJupiter()).toEqual('2.28');
  });

  it('should return a persons years left to live', function() {
    let testPerson = new Person(1991, 3, 30, 80, 2018, 2, 9)
    expect(testPerson.calculateLifeExpectancy()).toEqual(53);
  });

  it('should return a persons years left to live on Mercury', function() {
    let testPerson = new Person(1991, 3, 30, 80, 2018, 2, 9)
    expect(testPerson.mercuryYearsLeft()).toEqual('220.83');
  });

  it('should return a persons years left to live on Venus', function() {
    let testPerson = new Person(1991, 3, 30, 80, 2018, 2, 9)
    expect(testPerson.venusYearsLeft()).toEqual('85.48');
  });

  it('should return a persons years left to live on Mars', function() {
    let testPerson = new Person(1991, 3, 30, 80, 2018, 2, 9)
    expect(testPerson.marsYearsLeft()).toEqual('28.19');
  });

  it('should return a persons years left to live on Jupiter', function() {
    let testPerson = new Person(1991, 3, 30, 80, 2018, 2, 9)
    expect(testPerson.jupiterYearsLeft()).toEqual('4.47');
  });

  it('should tell when a user has outlived their life expectancy', function() {
    let testPerson = new Person(1991, 3, 30, 10, 2018, 2, 9)
    expect(testPerson.jupiterYearsLeft()).toEqual("You've already exceeded your life expectancy!");
  });
});
