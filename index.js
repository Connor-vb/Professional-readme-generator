const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Describe your project'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'License',
        message: 'Choose a license (if applicable)',
        choices: ["MIT", "Apache", "Mozilla", "No License"]
    },
    {
        type: 'input',
        name: 'Dependencies',
        message: 'List any dependencies (if applicable)',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'Who or what contributions were made?',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'Init',
        message: 'List any commands (if any) to start the project.',
        default: 'N/A'
    }
])

