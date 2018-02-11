export class Person {
  constructor (userYear, userMonth, userDay, userLifeExpectancy, currentYear, currentMonth, currentDay) {
    this.userDay = userDay;
    this.userMonth = userMonth;
    this.userYear = userYear;
    this.userLifeExpectancy = userLifeExpectancy;
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

  calculateLifeExpectancy() {
    let yearsLeft = this.userLifeExpectancy - this.convertToSeconds();

    return yearsLeft;
  }

  convertToMercury() {
    let MercuryAge = (this.convertToSeconds() / .24);

    return MercuryAge.toFixed(2);
  }

  mercuryYearsLeft() {
    let mercuryExpectancy = (this.calculateLifeExpectancy() / .24);
    if(this.convertToSeconds() < this.userLifeExpectancy) {
      console.log(this.convertToSeconds());
      console.log(this.calculateLifeExpectancy());
      return mercuryExpectancy.toFixed(2);
    }
    else {
      return "You've already exceeded your life expectancy!"
    }
  }

  convertToVenus() {
    let VenusAge = (this.convertToSeconds() / .62);

    return VenusAge.toFixed(2);
  }

  venusYearsLeft() {
    let venusExpectancy = (this.calculateLifeExpectancy() / .62);
    if(this.convertToSeconds() < this.userLifeExpectancy) {
      return venusExpectancy.toFixed(2);
    }
    else {
      return "You've already exceeded your life expectancy!"
    }
  }


  convertToMars() {
    let MarsAge = (this.convertToSeconds() / 1.88);

    return MarsAge.toFixed(2);
  }

  marsYearsLeft() {
    let marsExpectancy = (this.calculateLifeExpectancy() / 1.88);
    if(this.convertToSeconds() < this.userLifeExpectancy) {
      return marsExpectancy.toFixed(2);
    }
      else {
        return "You've already exceeded your life expectancy!"
      }
  }


  convertToJupiter() {
    let JupiterAge = (this.convertToSeconds() / 11.86);

    return JupiterAge.toFixed(2);
  }

  jupiterYearsLeft() {
    let jupiterExpectancy = (this.calculateLifeExpectancy() / 11.86);
    if(this.convertToSeconds() < this.userLifeExpectancy) {
      return jupiterExpectancy.toFixed(2);
    }
    else {
      return "You've already exceeded your life expectancy!"
    }
  }


};
