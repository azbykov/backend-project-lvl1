#!/usr/bin/env node
import { getRandomNum } from '../src/utils.js';
import gameRun from '../src/engine.js';

const GREETING_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';

const getParams = () => {
  const number = getRandomNum();

  return {
    question: number,
    answer: !(number % 2) ? 'yes' : 'no',
  };
};

gameRun({ greeting: GREETING_TEXT, getParams });
