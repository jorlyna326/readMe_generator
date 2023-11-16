// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license === 'none'){
  return ''
}
return 'badge'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none'){
    return ''
  }
  return '- [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none'){
    return ''
  }

  return 'license section'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table Of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Questions

If you have any question you can reach me [here](${data.email})

please check out my other work at my github [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
