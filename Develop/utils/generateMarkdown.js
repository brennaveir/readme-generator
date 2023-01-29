const licenses = require('./licenses')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license !== "none") {
    const license = data.license.split(" ").join("-");
    const badge = `![License](https://img.shields.io/badge/License-${license}-orange)`
    return badge;
  }
  else return "";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  // console.log(license, badge)
  if (data.license !== "none") {
   licenses.forEach((array) => {
    if (data.license === array.license)
   console.log(array.link)
   })
    }
  
else return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== "none") {
   
  console.log(data.license)
  }
  else return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, badge, link, section) {
  return `
# ${data.title}
  
  ${renderLicenseBadge(data, badge)}
  
  ## Table of Contents (

-[Description](#decription)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Test](#test-instructions)
- [License](#License)
- [Questions](#questions)
  

  ## Description
    ${data.description}

  ## Installation
   ${data.installation}

  ## Usage
    ${data.usage}

  ## Contributors
    ${data.contributors}

  ## Test Instructions
    ${data.test}

  ## License
    ${data.license}
    ${renderLicenseLink(data,link)}
    ${renderLicenseSection(data,section)}

  ## Questions 
  If there are any additional questions, feel free to reach out by email or github.
  Email: ${data.email}
  Github: ${data.github}

`;
}

module.exports = generateMarkdown;
