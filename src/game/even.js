import { getRandomNum } from '../utils.js';
import gameRun from '../engine.js';

const GREETING_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';

const getParams = () => {
  const number = getRandomNum();

  return {
    question: number,
    answer: !(number % 2) ? 'yes' : 'no',
  };
};

export default () => gameRun({ greeting: GREETING_TEXT, getParams });
