#! usr/bin/env node
//******  this is for shabang *****/

// Importing Inquirer and also wth dependencies
import inquirer from "inquirer"

const answers : {
    sentence: string

} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence for counting the WORDS"
    }
])
const words = answers.sentence.trim().split(' ')
const words_wo_space = answers.sentence.trim().split(' ').length
const char_w_space = answers.sentence.trim().length
const characters_wo_spaces = answers.sentence.trim().length
console.log(`Your Orignal Text ${words}`)
console.log(`-------------------------------------`)
console.log(`Words Without Spaces ${words_wo_space}`)
console.log(`-------------------------------------`)
console.log(`Characters With Spaces ${char_w_space}`)
