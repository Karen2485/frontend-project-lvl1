export const welcome = () => console.log('Welcome to the Brain Games!');
export const randomNumber = (randomRange) => Math.round(Math.random() * (randomRange));
export const wrongAnswer = (wrong, riht, user) => console.log(`${wrong} is wrong answer ;(. Correct answer was ${riht}. Let's try again, ${user}`);
export const correctAnswer = () => console.log('Correct!');
export const congratulation = (user) => console.log(`Congratulations, ${user}`);
