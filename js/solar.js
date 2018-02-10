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
    let userTotalSeconds = (this.userDay * day) + (this.userMonth * month) + (this.userYear * year);
    let currentDayTotalSeconds = (this.currentDay * day) + (this.userMonth * month) + (this.currentYear * year);

    return Math.round((currentDayTotalSeconds - userTotalSeconds)/year);
  }

  convertToMercury() {
    let MercuryAge = parseFloat((this.convertToSeconds() / .24));

    return MercuryAge.toFixed(2);
  }

  convertToVenus() {
    let VenusAge = (this.convertToSeconds() / .62);

    return VenusAge.toFixed(2);
  }

  convertToMars() {
    let MarsAge = (this.convertToSeconds() / 1.88);

    return MarsAge.toFixed(2);
  }

  convertToJupiter() {
    let JupiterAge = (this.convertToSeconds() / 11.86);

    return JupiterAge.toFixed(2);
  }

};
