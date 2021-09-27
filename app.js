const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
const fs = require("fs");
const generatePage = require("./src/page-template.js");

//! This two variables are replaced by line 7(third line)
//This feature is called assignment destructuring
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Checkout index.html to see the output!");
});
//!Continue on module 9.2.5
