# Portfolio-generator

This is a Node.js project, it utilizes the commandline to accept user input.

The application uses asyncronous promises to make the application run step by step.

- First it runs the prompt function with the user to accept information.
  - This first step loops as many times as needed to allow the user to enter
    1 or multiple projects.
  - With each loop the function pushes data into an array to be stored
- Once all data is entered the function continues onto the write file promise
  - If successful the promise is resolved and will continue to the next step.
  - If rejected, the application will stop and will log an error.
- Index file will be written.
- Then the copy promise will be triggered.
  - If successful, the application will log a successful copy of the ccs style sheet.
  - If rejected, the application will stop and will log an error.

<img src="./Screen Shot 2021-09-29 at 10.10.56 PM.png">
<img src="./Screen Shot 2021-09-29 at 10.11.02 PM.png">
