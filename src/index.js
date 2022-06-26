import readLineSync from 'readline-sync';

const numberOfRounds = 3;
const gameEngin = (getGameData, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [correctAnswer, gameTask] = getGameData();
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
