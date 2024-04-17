// Importing Inquirer and also wth dependencies
// import { log } from "console"
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence for counting the WORDS"
    }
]);
const words = answers.sentence.trim().split(' ');
const words_wo_space = answers.sentence.trim().split(' ').length;
const char_w_space = answers.sentence.trim();
const characters_wo_spaces = answers.sentence.trim().length;
console.log(`Your Orignal Text ${words}`);
console.log(`-------------------------------------`);
console.log(`Words Without Spaces ${words_wo_space}`);
console.log(`-------------------------------------`);
console.log(`Characters With Spaces ${char_w_space}`);
console.log(`-------------------------------------`);
console.log(`Your words ${characters_wo_spaces}`);
