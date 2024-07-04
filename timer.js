import inquirer from 'inquirer';
import chalk from "chalk";
let time = 10; // Set the countdown time in seconds
async function countdown() {
    while (time >= 0) {
        console.clear();
        console.log(chalk.yellow(`Time left: ${time} seconds`));
        await new Promise((resolve) => setTimeout(resolve, 1000));
        time--;
    }
    console.log(chalk.green("Time's up!"));
}
async function askQuestion() {
    const questions = [
        {
            type: 'input',
            name: 'answer',
            message: `What is the capital of France? (Answer within ${time} seconds)`,
        },
    ];
}
async function main() {
    await inquirer.prompt([
        {
            type: 'input',
            name: 'time',
            message: 'Enter the countdown time in seconds:',
            validate: (input) => {
                if (isNaN(parseFloat(input))) {
                    return chalk.red('Please enter a valid number');
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
