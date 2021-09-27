// TODO: Create a function that returns a LICENSE BADGE based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the LICENSE LINK
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that RETURNS LICENSE SECTION of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to GENERATE MARKDOWN for README
function generateMarkdown(data) {
  return `
  # ${data.title}

        
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
