# Getting Started

Welcome to Tandem Trivia! To start playing, please follow the steps below.

$ git clone https://github.com/JordanRaleigh/TandemChallenge.git
$ cd TandemChallenge
$ npm install
$ npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

## Overview

Welcome to my Tandem Trivia code challenge! I built this using JavaScript, Create React App, and React Hooks.

The code brings in a given JSON file, randomly sets 10 questions in the question bank and then goes through each question giving the player the opportunity to choose and answer. The app will then reveal if it was correct or not and show the right answer if it was incorrect. The player can then progress to the next question and then receive a final score after all 10 questions have been attempted.

Hope you enjoyed playing and reading through my code!

## Parking Lot

If I had more time I would have loved to add the following additions to my application and fix the following bugs.

#Organizational

- Split my Quiz.js component into smaller functional and dumb components to improve organization.

#Testing

- Build out more unit testing for all functions.
- Build more integration testing on each broken out component.

#Functionality

- Add a reset button at the end of the quiz to restart.
- Set restrictions on assets sent to front end to avoid potential cheating and looking into the code for answers.
- Add a timer to each question to add a more fun and challenging experience.
- Add a hint button to give a fun hint or pun.
- Show the score on the side after each question and if you use a hint it gives you half a point.

#Bugs

- Currently you are able to select a different answer after clicking and revealing the answer. I would need to capture your first choice and not allow any changes.
