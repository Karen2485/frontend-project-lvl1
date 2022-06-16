import {
  congratulation, correctAnswer, randomNumber, welcome, wrongAnswer, question, answer, haveName,
  greeting,
} from '../src/index.js';

const prime = () => {
  welcome();
  const name = haveName();
  greeting(name);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const givenNumber = randomNumber(100) + 2;
    let isPrime = 'yes'; // в случае, когда givenNumber = 2; цикл не сработает. число 2 автоматически будет считаться простым.
    for (let divider = 2; divider <= givenNumber / 2; divider += 1) {
      if (givenNumber % divider === 0) {
        isPrime = 'no';
        break;
      } else {
        isPrime = 'yes';
      }
    }
    question(givenNumber);
    const userAnswer = answer();
    if (userAnswer === isPrime) {
      correctAnswer();
    } else {
      wrongAnswer(userAnswer, isPrime, name);
      return;
    }
  }
  congratulation(name);
};
export default prime;
