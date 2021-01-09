// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const retlicBadge =  value from the user that dropped it in the license badge js 
  // If there is no license, return an empty string
  if retlicBadge 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}\n

  # Description ${answers.description}\n

  # Table Of Contents 
  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation\n
  $(answers.installation)\n

  # Usage \n
  $(answers.usage)\n

  # License \n
  $(answers.license)\n

  # Contributors \n
  $(answers.contributors) \n

  # Tests \n
  $(answers.tests) \n

  # Questions \n
  $(answers.questions) \n

  `;
}

module.exports = generateMarkdown;
