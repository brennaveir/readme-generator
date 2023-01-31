const licenses = require('./licenses')
let link;
let badge;
let section;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license !== "none") {
    licenses.forEach((array) => {
      if (data.license === array.license) {
        badge = array.badge;
      }

    })
    return badge
  }

  else return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  // console.log(license, badge)
  if (data.license !== "none") {
    licenses.forEach((array) => {
      if (data.license === array.license) {
        link = array.link;
      }
    })
    return link
  }
  else return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== "none") {
    licenses.forEach((array) => {
      if (data.license === array.license) {
        section = array.section;
      }
    })
    return section
  }

  else return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data)}

## Table of Contents (

- [Description](#decription)
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
${renderLicenseLink(data)}

${renderLicenseSection(data)}

## Questions 
If there are any additional questions, feel free to reach out by email or github.

Email: [${data.email}](mailto:${data.email})

Github: [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
