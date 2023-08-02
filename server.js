const express = require('express');
const { prompts } = require("./helpers/helpers");

const PORT = process.env.port || 3001;
const app = express();

const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// create a route to handle home page
app.get("/", (req, res) => {
   prompts()
})

// after homepage must display 5 options: 
// view all departments - this route should display a table that displays department names and department ids (2 columns)
// view all roles - should present job title, role id, department of the role and salary (4 columns in SQL)
// view all employees - employee id, first name, last name, job title, department, salary and managers (6 columns)
// add department - prompt appears, asks for name of the department, then adds department
        // probably needs inquirer and fs.read / writefile
// add role - prompt for name, salary and department
        // inquirer and fs read/write file
// add employee - prompt for first name, last name, role and manager, add to db
// update employee role - prompt update new role and add to database
        // will need seperate dbs for each function
        // don't forget json stringify and json parse for data