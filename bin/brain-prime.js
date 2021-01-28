#!/usr/bin/env node
import gameRun from '../src/engine.js';
import {getRandomNum, isPrime} from '../src/utils.js';

const GREETING_TEXT = '"yes" if given number is prime. Otherwise answer "no"';

const getParams = () => {
  const number = getRandomNum(0, 20);

  return {
    question: `${number}`,
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

gameRun({greeting: GREETING_TEXT, getParams});
