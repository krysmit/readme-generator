// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use your application:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license did you use?',
            choices: ['Creative Commons','MIT','Microsoft Public'],
          },
          {
            type: 'input',
            name: 'contribute',
            message: 'Explain if/what others can contribute to your work:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide an example of how to run the code:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub user name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What email can people use to reach out to you?',
        }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((responses) => {
        console.log("All responces entered. Creating README.")
        writeToFile('NewREADME.md', generateMarkdown({...responses}))
    })}


    
// Function call to initialize app
init();
