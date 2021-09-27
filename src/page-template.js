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
    <h2><a href="https://github.com/${github}" target="_blank">Git hub</a></h2>
    </body>
    </html>
  `;
};

module.exports = generatePage;
