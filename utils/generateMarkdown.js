// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-green)

  ## Description:
  ${data.description}

  ## Table of contents:
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Licensing](#licensing)
  4. [Contributors](#contributors)
  5. [Testing](#tests)
  6. [Questions](#questions)

  ## Installation: <a name="installation"></a>
  ${data.install}

  ## Usage: <a name="usage"></a>
  ${data.usage}

  ## License: <a name="licensing"></a>
  ![License:](https://img.shields.io/badge/License-${data.license}-green)

  ## Contributing: <a name="contributors"></a>
  ${data.credits}

  ## Tests: <a name="tests"></a>
  ${data.tests}

  ## Questions?: <a name="questions"></a>
  My GitHub profile is: https://github.com/${data.GitHub}.
  If you have any additional questions, feel free to reach me at my email: ${data.email}!
`;
}

module.exports = generateMarkdown;
