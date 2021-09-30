const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js");

//!Continue on module 9.5.4 -

//TODO COMMENTED IN FOR DEVELOPMENT
// const mockData = {
//   name: "Lernantino",
//   github: "lernantino",
//   projects: [],
// };

//!Commented out for development - reinstate once development is completed.
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username: (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmAbout",
      message:
        'Would you like to enter some information about yourself for an "About" section?',
      default: true,
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
      when: ({ confirmAbout }) => confirmAbout,
    },
  ]);
};
//!Reinstate ends

const promptProject = (portfolioData) => {
  console.log(`
    ================
    Add a New Project
    ================
   `);
  //If there is no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter a project description");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (Check all that apply)",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "jQuery",
          "Bootstrap",
          "Node",
        ],
      },
      {
        type: "input",
        name: "link",
        message: "Enter the GitHub link to your project. (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("Please enter the GitHub link");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this project",
        default: false,
      },
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData); //Restart the function, BUT store the answer you already received.
      } else {
        return portfolioData; //if this return is not included in the else statement. All response data will be lost.
      }
    });
};

// //TODO - MOCK Data
// const pageHTML = generatePage(mockData);

promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    console.log(portfolioData); //! leave this console log for later. if portfolioData is surrounded by [], it will spit out objects.
    const pageHTML = generatePage(portfolioData);
    fs.writeFile("./dist/index.html", pageHTML, (err) => {
      if (err) throw new Err(err);
      console.log(
        "Page created! Check out index.html in this directory to see it!"
      );

      fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Style sheet copied successfully!");
      });
    });
  });
