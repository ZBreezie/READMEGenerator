// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

console.log('Hello Node!');


// TODO: Create an array of questions for user input
// title, description, installation instructions, usage information, contribution, test, license, GHub to QUESTIONS, email to QUESTIONS
async function promptUser() {

    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your projects title?:"
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project..."
        },
        {
            type: "input",
            name: "install",
            message: "How does someone install your project?:",
        },
        {
            type: "input",
            name: "usage",
            message: "How do we use your project?:",
        },
        {
            type: "input",
            name: "credits",
            message: "Who are the contributors to this project?:"
        },
        {
            type: "input",
            name: "tests",
            message: "How would you test your project?:"
        },
        {
            type: "list",
            name: "license",
            message: "What is your projects license?:",
            choices: [
                "Apache2.0",
                "GNU",
                "MIT",
                "NoLicense!",
            ]
        },
        {
            type: "input",
            name: "GitHub",
            message: "What is your GitHub username?:"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?:"
        },
    ])
    .then((data) => {
        console.log(data)
        return writeToFile('./dist/README.md', generateMarkdown(data));
    })
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
       throw err;
      } else {
        console.log('README.md has been written to your "dist" folder!');
      }
    })
};

promptUser()