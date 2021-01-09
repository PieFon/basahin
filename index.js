//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
const licChoices = ["MIT", "GNU"];

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is the description?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are your installation instructions?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Usage?',
            name: 'usage'
        },
        
        {
            type: 'list',
            name:"license",
            message: 'Which license?',
            choice: licChoices,
        },
        {
            type: 'input',
            message: 'What about contributors?',
            name: 'contribution'
        },
                
    ])
<<<<<<< HEAD
    .then(answers => {
=======
    .then(answers) => {
>>>>>>> main
        console.log(answers)
        const markdownOutput = `generateMarkdown.js`
        console.log(markdownOutput);
        fs.writeFile(`${answers.name}.md`, markdownOutput, function(err) {
            if(err) {
                console.log(err)
            }else {
                console.log("markdown done!")
            }
            
<<<<<<< HEAD
    });
=======
    };
>>>>>>> main


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
