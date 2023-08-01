const inquirer = require("inquirer")

const questions = [
    {
        type : "input",
        name : "options",
        message : "What would you like to do today?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee"]
    },
] 

const prompt = () => {
    inquirer.prompt(
      questions
    )
}