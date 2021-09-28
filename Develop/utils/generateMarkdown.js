// TODO: Create a function that returns a LICENSE BADGE based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Creative Commons') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]'
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license === 'None') {
    return 'License: N/A'
  }
  }

// TODO: Create a function that returns the LICENSE LINK
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Creative Commons') {
    return 'Find information about this license [here](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else if (license === 'MIT') {
    return 'Find information about this license [here](https://opensource.org/licenses/MIT)'
  } else if (license === 'None') {
    return 'No license information available.'
  }
}


// TODO: Create a function that RETURNS LICENSE SECTION of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to GENERATE MARKDOWN for README
function generateMarkdown(data) {
  return `
         # ${data.title}

         # ${renderLicenseBadge(data.license)}
         # ${renderLicenseLink(data.license)}
        
         ## Description
          ${data.description}


          ## Table of Contents
          * [Installaition](#installation)
          * [Usage](#usage)
          * [License](#license)
          * [Contribution](#contribution)
          * [Testing](#testing)
          * [Questions](#questions)
          
          ## Installation
          ${data.install} 

          ## Usage
          ${data.usage}

          ## License
          ${data.license}

          ## Contribution
          ${data.contribute}

          ##Testing
          ${data.testing}

          ##Questions
          My Github:
          https://github.com/${data.github}
          Reach out to me with questions at: ${data.email}
     
`;
}

module.exports = generateMarkdown;
