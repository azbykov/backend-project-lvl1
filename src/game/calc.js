import { getRandomNum } from '../utils.js';
import gameRun from '../engine.js';

const GREETING_TEXT = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*'];

const ACTION = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getParams = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const operator = OPERATORS[getRandomNum(0, OPERATORS.length - 1)];
  return {
    question: `${a} ${operator} ${b}`,
    answer: ACTION[operator](a, b),
  };
};

export default () => gameRun({ greeting: GREETING_TEXT, getParams });
