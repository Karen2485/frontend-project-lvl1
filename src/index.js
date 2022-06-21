import readLineSync from 'readline-sync';

const gameEngin = (generateGame, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 1; i <= 3; i += 1) {
    const [correctAnswer, gameTask] = generateGame();
    console.log(`Question: ${gameTask}`);
    const answer = readLineSync.question('Your answer? ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameEngin;
