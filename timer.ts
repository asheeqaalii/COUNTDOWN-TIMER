import inquirer from 'inquirer';
import chalk from "chalk";

let time: number = 10; // Set the countdown time in seconds

async function countdown() {
  while (time >= 0) {
    console.clear();
    console.log(`Time left: ${time} seconds`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    time--;
  }
  console.log('Countdown complete!');
}

async function main() {
  await inquirer.prompt([
    {
      type: 'input',
      name: 'time',
      message: 'Enter the countdown time in seconds:',
      validate: (input) => {
        if (isNaN(parseFloat(input))) {
          return 'Please enter a valid number';
        }
        return true;
      },
    },
  ]).then((answers) => {
    time = parseInt(answers.time);
    countdown();
  });
}

main();