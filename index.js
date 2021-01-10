//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdownOutput = require("./utils/generateMarkdown.js");
const licChoices = ["MIT", "GNU"];
const markdownTemplate = `

`

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
            name: "license",
            message: 'Which license?',
            choices: licChoices,
        },
        {
            type: 'input',
            message: 'What about contributors?',
            name: 'contribution'
        },

    ])
<<<<<<< HEAD
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
=======
    .then(answers => {
        console.log(answers);
        
        const markdownOutput = `

  ### ${answers.title}\n

  ## Description ${answers.description}\n

  ## Table Of Contents 
  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation\n
  $(answers.installation)\n

  ## Usage \n
  $(answers.usage)\n

  ## License \n
  $(answers.license)\n

  ## Contributors \n
  $(answers.contributors) \n

  ## Tests \n
  $(answers.tests) \n

  ## Questions \n
  $(answers.questions) \n

  `;

         
        ;
        fs.writeFile(`${answers.name}.md`, markdownOutput, function (err) {
            if (err) {
>>>>>>> main
                console.log(err)
            } else {
                console.log("Markdown file created, you are done!")
            }
<<<<<<< HEAD
            
<<<<<<< HEAD
    });
=======
    };
>>>>>>> main
=======
>>>>>>> main

        });
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
