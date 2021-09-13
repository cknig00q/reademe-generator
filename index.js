// TODO: Include packages needed for this application

const inquirer = require( 'inquirer' );
const fs = require( 'fs' );

function init() {
inquirer
  .prompt([
    {
      name: "projectTitle",
      type: "input",
      message: "Project title?",
    },
    {
      name: "projectDescription",
      type: "input",
      message: "Description of your project?",
    },
    {
      name: "projectInstallInstructions",
      type: "input",
      message: "Please include installation instruction for your project:",
    },
    {
      name: "projectUsage",
      type: "input",
      message: "Describe your project usage.",
    },
    {
      name: "testing",
      type: "input",
      message: "Instructions for testing",
    },
    {
      name: "creatorEmail",
      type: "input",
      message: "Please provide the README creator's email.",
    },
    {
      name: "githubUser",
      type: "input",
      message: "What is your Github username?",
    },
    {
      name: "licenseChoices",
      type: "list",
      message: "Please select the license/badge that you would like to add to your repo.",
      choices: [
        "Apache-2.0",
        "GPL",
        "LGPL",
        "MIT",
        "MPL-2.0",
        "EPL-2.0",
        "PostgreSQL",
      ]
    },
  ])
  .then((answers) => {
    fs.writeFile( 'README.md', writeToFile(answers), ( err ) =>
    err ? console.log(err) : console.log( 'Congratulations! Your README file was successfully created!' )
    );
  })
}

const writeToFile = (answers) =>
  `# ${answers.projectTitle} 
  # Description 
  ${answers.projectDescription} 

  # Installation
  * ${answers.projectInstallInstructions} 
  # Usage
  * ${answers.projectUsage} 
  # License
  * ${answers.licenseChoices} 
  # Contributers
  * ${answers.creatorEmail} 
  # Instructions for Testing
  * ${answers.testing} 
  # Contact me using the resources below!
  * [Github Link](https://github.com/${answers.github})
  * Email me at ${answers.creatorEmail}
 `;

init();
