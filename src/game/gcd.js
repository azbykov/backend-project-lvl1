import { getRandomNum } from '../utils.js';
import gameRun from '../engine.js';

const GREETING_TEXT = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const getParams = () => {
  const a = getRandomNum();
  const b = getRandomNum();

  return {
    question: `${a} ${b}`,
    answer: getGcd(a, b),
  };
};

export default () => gameRun({ greeting: GREETING_TEXT, getParams });
