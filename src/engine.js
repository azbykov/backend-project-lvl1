import readlineSync from 'readline-sync';

const MAX_POINTS = 3;

const gameRun = ({ greeting, getParams }, maxPoints = MAX_POINTS) => {
  console.log('Welcome to the Brain Games!');

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  console.log(greeting);

  for (let i = 0; i < maxPoints; i += 1) {
    const { question, answer } = getParams();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');

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
