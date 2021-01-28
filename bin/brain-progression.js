#!/usr/bin/env node
import gameRun from '../src/engine.js';
import {getRandomNum} from '../src/utils.js';

const DEFAULT_LENGTH = 10;

const getParams = () => {
  let start = getRandomNum(0, DEFAULT_LENGTH);
  const step = getRandomNum(1, DEFAULT_LENGTH);
  const missing = getRandomNum(0, DEFAULT_LENGTH - 1);
  const acc = [start];

  for (let i = 1; i < DEFAULT_LENGTH; i += 1) {
    start += step;
    acc.push(start);
  }

  const answer = acc[missing];

  acc[missing] = '..';

  return {
    answer,
    question: `${acc.join(' ')}`,
  };
};

const greeting = 'What number is missing in the progression?';
gameRun({greeting, getParams});
