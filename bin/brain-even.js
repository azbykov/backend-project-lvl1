#!/usr/bin/env node
import {getRandomNum} from '../src/utils.js';
import gameRun from '../src/engine.js';

const getParams = () => {
  const number = getRandomNum();

  return {
    question: number,
    answer: !(number % 2) ? 'yes' : 'no',
  };
};

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';
gameRun({greeting, getParams});
