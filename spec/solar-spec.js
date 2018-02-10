import { Person } from './../js/solar.js';


describe ('Person', function () {

  it('should return a persons correct age as a year', function() {
    let testPerson = new Person(1991, 3, 30, 2018, 2, 9)
    expect(testPerson.convertToSeconds()).toEqual(27);
  });
});
