#!/usr/bin/env node
import gameRun from '../src/engine.js';
import {getRandomNum} from '../src/utils.js';

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

const greeting = 'What is the result of the expression?';
gameRun({greeting, getParams});
