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
  return `# ${data.title}
          ## ${data.description}

          //insert license image here
          //delete this line`
            ```md
            ![alt text](licenseimages.jpg)
            ```
            `delete this line//

          ## Table of Contents
          * [Installaition] (#installation)
          * [Usage] (#usage)
          * [License] (#license)
          * [Contribution] (#contribute)
          * [Testing] (#tests)
          * 
          ## Installation
          ${data.install} 

          ## Usage
          ${data.usage}

          ## License
          ${data.license}

          //need to have a description of the license added here
          ## Contribution
          ${data.contribute}

          ##Testing
          ${data.testing}
     
`;
}

module.exports = generateMarkdown;
