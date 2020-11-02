## Overview

Welcome to my Tandem Trivia code challenge! This application was built using JavaScript, Create React App, and utilizes React Hooks.

The code brings in a given JSON file, randomly sets 10 questions in the question bank and then goes through each question giving the player the opportunity to choose an answer. The app will then reveal if it was correct or not and show the right answer if it was incorrect. The player can then progress to the next question and will receive a final score after all 10 questions have been attempted.

This application also uses Jest and Enzyme as its testing framework to ensure quality.

Hope you enjoy playing and reading through my code!

# Getting Started

Welcome to Tandem Trivia! To start playing, please follow the steps below.

\$ git clone https://github.com/JordanRaleigh/TandemChallenge.git

\$ cd TandemChallenge

\$ npm install

\$ npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

## Parking Lot

If I had more time I would have loved to add the following additions to my application and fix the following bugs.

Organization

- Split my Quiz.js component into smaller functional and dumb components to improve organization and seperate out concerns.

Testing

-Add Mocha and Chai framworks to the application and build more specific tests as I'm more experienced with these libraries.

- Build out more unit testing for all functions.
- Build more integration testing on each broken out component.

Functionality

- Add a reset button at the end of the quiz to restart.
- Add a database to avoid potential cheating by storing questions and answer data in a database.
- Add a timer to each question to add a more fun and challenging experience.
- Add a hint button to give a fun hint or pun.
- Show the score on the side after each question and if you use a hint it gives you half a point.

Bugs

- Currently you are able to select a different answer after clicking and revealing the answer. I would need to capture the first choice and not allow any changes.
