const inquirer = require('inquirer');

const questions = [
 {
     type : "list",
     name : "options",
     message : "What would you like to do today?",
     choices : ["View All Departments", "View All Roles", "View All Employees", "Add a Department", 
                "Add a Role", "Add an Employee", "Update an Employee", "Nevermind I'm done"]
 },
] 

let departments = ['Sales','Marketing','Finance','Human Resources','Operations'];