#!/usr/bin/env node
import {getUserGreeting, getUserNumberAnswer} from '../src/cli.js';
import getRandomNum from '../src/utils.js';

const MAX_POINTS = 3;
let points = 0;

const getGameRound = (username) => {
  const num = getRandomNum();
  const answer = getUserNumberAnswer(num);
  const correctAnswer = !(num % 2) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    points += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${username}`);
  }
};

console.log('Welcome to the Brain Games!');
const username = getUserGreeting();
while (points < MAX_POINTS) {
  getGameRound(username);
}
console.log(`Congratulations, ${username}!`);
