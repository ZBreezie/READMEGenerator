// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

console.log('Hello Node!');


// TODO: Create an array of questions for user input
// title, description, installation instructions, usage information, contribution guidelines, test, license, GHub to QUESTIONS, email to QUESTIONS
const questions = [
    
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your projects title?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project..."
        },
        {
            type: "input",
            name: "install",
            message: "How does someone install your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?",
        },
        {
            type: "input",
            name: "credits",
            message: "Who are the other contributors to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "How would you test your project?"
        },
        {
            type: "list",
            name: "license",
            message: "What is your projects license?",
            choices: [
                "Apache",
                "GNU",
                "MIT",
                "No license!",
            ]
        },
        {
            type: "input",
            name: "GitHub",
            message: "What is your GitHub account?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
    ])
    .then((data) => {
        console.log(data)
      })
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
