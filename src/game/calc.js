import getRandomNum from '../get-random-num.js';
import gameRun from '../engine.js';

const GAME_RULE_TEXT = 'What is the result of the expression?';

const ACTION = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getGameSettings = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const operators = Object.keys(ACTION);
  const selectedOperator = operators[getRandomNum(0, operators.length - 1)];
  return {
    question: `${a} ${selectedOperator} ${b}`,
    answer: ACTION[selectedOperator](a, b),
  };
};

export default () => gameRun(GAME_RULE_TEXT, getGameSettings);
