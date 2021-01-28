#!/usr/bin/env node
import gameRun from '../src/engine.js';
import {getRandomNum} from '../src/utils.js';

const GREETING_TEXT = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*', '/'];

const ACTION = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const getParams = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const operator = OPERATORS[getRandomNum(0, 3)];
  return {
    question: `${a} ${operator} ${b}`,
    answer: ACTION[operator](a, b),
  };
};

gameRun({greeting: GREETING_TEXT, getParams});
