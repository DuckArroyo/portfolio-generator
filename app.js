const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
const fs = require("fs");

//! This two variables are replaced by line 7(third line)
//This feature is called assignment destructuring
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

// const printProfileData = (profileDataArr) => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("================");

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

const generatePage = (name, github) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta chartset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
  <h1>${name}</h1>
  <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
`;
};

fs.writeFile("index.html", generatePage(name, github), (err) => {
  if (err) throw err;

  console.log("Portfolio complete! Checkout index.html to see the output!");
});
//!Continue on module 9.2.5
