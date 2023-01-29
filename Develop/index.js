// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown.js')



// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'fullName',
          message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'year',
            message: 'What is the year your application was written?',
          },
        {
          type: 'input',
          name: 'title',
          message: 'What is your application title?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'What is the description?',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What are the installation instructions?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What is the usage information?',
        },
        {
          type: 'input',
          name: 'contributors',
          message: 'Who are the contributors?',
        },
        {
          type: 'input',
          name: 'test',
          message: 'What are the test instructions?',
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is your github username?'
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email?'
        },
        {
          type: 'list',
          name: 'license',
          message: 'Which type of license would you like to apply to your readme?',
          choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License v2.1', 'The Unlicense', 'None'],
        }
      
];

// TODO: Create a function to write README file
function writeToFile(data) {
  const readmeFile = generateMarkdown(data);
 fs.writeFile('README.md', readmeFile, "utf8")
 .then(() => console.log('Successfully created README'))
 .catch((err) => console.error(err));  

}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  
  .then(writeToFile)
    
    
}

// Function call to initialize app
init();
