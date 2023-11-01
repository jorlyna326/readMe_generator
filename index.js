// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is your title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide description of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'please select a license from this list:',
        choices: ['MIT', 'GNU', 'Apache','none']

    },
    {
        type: 'input',
        name: 'usage',
        message: 'What will you use this for?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please create a PR so I can review it'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'npm install'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
           writeToFile('README.md', generateMarkdown(answers))
        })
}

// Function call to initialize app
init();
