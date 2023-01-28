// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license !== "none") {
    const license = data.license.split(" ").join("-");
    const badge = `![License](https://img.shields.io/badge/License-${license}-orange)`
    generateMarkdown(data, badge);
  }
  else data.license === "";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  // console.log(license, badge)
  if (data.license !== "none") {
    const license = data.license.split(" ").join("-");
    const link = "";
    generateMarkdown(data, link);
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== "none") {
    const license = data.license.split(" ").join("-");
    const section = "";
    generateMarkdown(data, section);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  
  ${renderLicenseBadge}
  
  ## Table of Contents (

-[Description](#decription)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Test](#test instructions)
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
  ${renderLicenseLink}
  ${renderLicenseSection}

  ## Questions 
  If there are any additional questions, feel free to reach out by email or github.
  Email: ${email}
  Github: https://github.com/${github}

`;
}

module.exports = renderLicenseBadge;
