#!/usr/bin/env node
import gameRun from '../src/engine.js';
import { getRandomNum, getGcd } from '../src/utils.js';

const GREETING_TEXT = 'Find the greatest common divisor of given numbers.';

const getParams = () => {
  const a = getRandomNum();
  const b = getRandomNum();

  return {
    question: `${a} ${b}`,
    answer: getGcd(a, b),
  };
};

gameRun({ greeting: GREETING_TEXT, getParams });
