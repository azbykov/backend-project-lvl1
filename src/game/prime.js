import getRandomNum from '../get-random-num.js';
import gameRun from '../engine.js';

const GAME_RULE_TEXT = '"yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getGameSettings = () => {
  const number = getRandomNum(0, 20);

  return {
    question: number.toString(),
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

export default () => gameRun(GAME_RULE_TEXT, getGameSettings);
