import inquirer from "inquirer";
import chalk from "chalk";
console.log("***********************************");
console.log(chalk.red("\tWord Counter"));
console.log("***********************************");
const answer = await inquirer.prompt([
    {
        message: chalk.blueBright("Enter the text to count words: "),
        name: "text",
        type: "input",
    },
]);
let regix = /\s+/g; /*regular expression to remove whitespaces from text / mark the start and end,
\s is used to match any whitespace,+ match one or more occurance of whitespace,
g stands for global make sure all whitespaces are identified*/
let charWithoutSpaces = answer.text.replace(regix, "");
console.log(chalk.yellow("No of characters in paragraph: " + charWithoutSpaces.length));
let wordWithoutSpaces = answer.text.match(/\S+/g); /*match to find all sequences of non-whitespace characters (words) in the paragraph and
store the word into an array*/
console.log(chalk.yellow("No of words in paragraph: " + wordWithoutSpaces.length));
