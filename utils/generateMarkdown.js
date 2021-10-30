// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  ${data.license}

  ## Contributing: <a name="contributors"></a>
  ${data.credits}

  ## Tests: <a name="tests"></a>
  ${data.tests}

  ## Questions?: <a name="questions"></a>
  GitHub: ${data.GitHub} / If you have any additional questions, feel free to reach me at my email: ${data.email}

  Generated with ❤️ by Zachary McCollum
`;
}

module.exports = generateMarkdown;
