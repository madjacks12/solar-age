export class Person {
  constructor (userYear, userMonth, userDay, currentYear, currentMonth, currentDay) {
    this.userDay = userDay;
    this.userMonth = userMonth;
    this.userYear = userYear;
    this.currentYear = currentYear;
    this.currentMonth = currentMonth;
    this.currentDay = currentDay;
  }


  convertToSeconds() {
    const day = 86400
    const month =2592000
    const year = 31536000
  }
};
