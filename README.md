# Solar-Age
#### _By Matthew Jackson, 2/11/2018_

This webpage calculates your age and years left to live on Mercury, Venus, Mars and Jupiter based on user inputted date of birth and life expectancy.

## Getting Started

To run this webpage you will need to have Gulp and NodeJS installed on your computer.

## Setup

1. `$git clone https://github.com/madjacks12/solar-age`
2. Run `$ npm install` and `$ bower install` inside that directory.

## Usage
1. To start the browser syncing and file watching, just first run `$ gulp build` followed by  `$ gulp cssBuild`.
**Note:** I am unsure if the development server is live reloading correctly.

## Future development
I would like to eventually add logic to display when a user's next birthday would be on a given planet. I would also like to put the results in a table so it doesn't look quite as messy as it is currently.

## Bugs

The only known bug is that the error message intended to be displayed if a user does not enter a date of birth is not being displayed correctly. I believe this is because the placeholder Date value is not falsy, but also not a number.
