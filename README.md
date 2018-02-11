# Solar-Age
#### _By Matthew Jackson, 2/11/2018_

This webpage calculates your age and years left to live on Mercury, Venus, Mars and Jupiter based on user inputted date of birth and life expectancy.

## Getting Started

To run this webpage you will need to have Gulp and NodeJS installed on your computer.

## Setup

1. `$git clone https://github.com/madjacks12/solar-age`
2. Run `$ npm install` inside that directory.

## userAge
1. To start the browser syncing and file watching, just first run `$ gulp build` followed by  `$ gulp cssBuild`.
**Note:** I am unsure if the development server is live reloading correctly.

## Bugs

The only known bug is that the error message intended to be displayed if a user does not enter a date of birth is not being displayed correctly. I believe this is because the placeholder Date value is not falsy, but also not a number.
