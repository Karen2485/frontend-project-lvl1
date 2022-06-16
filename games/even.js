import readLineSync from 'readline-sync';

const game = () => {
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const isEven = Math.round(Math.random() * 100);
    console.log(`Question: ${isEven}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (isEven % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    } else if (isEven % 2 !== 0 && userAnswer !== 'no') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}`);
      return;
    }
    if (isEven % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (isEven % 2 === 0 && userAnswer !== 'yes') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
