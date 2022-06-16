import readLineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const randomNumber = (randomRange) => Math.round(Math.random() * (randomRange));
export const wrongAnswer = (wrong, riht, user) => console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${riht}'.\n Let's try again, ${user}!`);
export const correctAnswer = () => console.log('Correct!');
export const congratulation = (user) => console.log(`Congratulations, ${user}!`);
export const question = (task) => console.log(`Question: ${task}`);
export const answer = () => readLineSync.question('Your answer: ');
export const haveName = () => readLineSync.question('May I have your name? ');
export const greeting = (nameOfUser) => console.log(`Hello, ${nameOfUser}!`);
