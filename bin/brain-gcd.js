#!/usr/bin/env node
import gameRun from '../src/engine.js';
import {getRandomNum, getGcd} from '../src/utils.js';

const getParams = () => {
  const a = getRandomNum();
  const b = getRandomNum();

  return {
    question: `${a} ${b}`,
    answer: getGcd(a, b),
  };
};

const greeting = 'Find the greatest common divisor of given numbers.';
gameRun({greeting, getParams});
