import { getUserNumberAnswer, getUserGreeting } from './cli.js';

const MAX_POINTS = 3;

const gameRun = ({ greeting, getParams }, maxPoints = MAX_POINTS) => {
  console.log('Welcome to the Brain Games!');

  const username = getUserGreeting();

  console.log(greeting);

  for (let i = 0; i < maxPoints; i += 1) {
    const { question, answer } = getParams();
    const userAnswer = getUserNumberAnswer(question);

    if (userAnswer === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default gameRun;
