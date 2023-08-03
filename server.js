const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require("fs");

const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: "root",
    password: "password",
    database: "departments_db"
  },       
  console.log("connected")
);

const questions = [
    {
        type : "list",
        name : "options",
        message : "What would you like to do today?",
        choices : ["View All Departments", "View All Roles", "View All Employees", "Add a Department", 
                   "Add a Role", "Add an Employee", "Update an Employee", "Nevermind I'm done"]
    },
] 

const viewAllDepartments = () => {
    db.query("SELECT * FROM departments", (err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });        
  }

const viewAllRoles = () => {
  db.query("SELECT * FROM roles", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.log(res);
  });
}  

const viewAllEmployees = () => {
  db.query("SELECT * FROM employees", (err, res) => {
    if(err) {
      console.log(err);
    }
    console.log(res);
  });
}  

const addDepartment = () => {
  db.query("INSERT INTO departments SET ?", (err, res) => {
    if(err) {
      console.log(err);
    }
    console.log(res);
  });
}

const addRole = () => {
  db.query("INSERT INTO roles SET ?", (err, res) => {
    if(err) {
      console.log(err);
    }
    console.log(res);
  });
}

const addEmployee = () => {
  db.query("INSERT INTO employees SET ?", (err, res) => {
    if(err) {
      console.log(err);
    }
    console.log(res);
  });
}

const updateEmployee = () => {
  db.query("UPDATE employees SET ?", (err, res) => {
    if(err) {
      console.log(err);
    }
    console.log(res);
  });
}

inquirer.prompt(questions)
  .then((answers) => {
    switch (answers.options) {
      case "View All Departments":
        viewAllDepartments();
        break;
      case "View All Roles":
        viewAllRoles();
        break;
      case "View All Employees":
        viewAllEmployees();
        break;
      case "Add a Department":
        addDepartment();
        break;
      case "Add a Role":
        addRole();
        break;
      case "Add an Employee":
        addEmployee();
        break;
      case "Update an Employee":
        updateEmployee();
        break;
      case "Nevermind I'm done":
        console.log("Goodbye!");
    }
});
// after homepage must display 5 options: 
// add department - prompt appears, asks for name of the department, then adds department
        // probably needs inquirer and fs.read / writefile
// add role - prompt for name, salary and department
// add employee - prompt for first name, last name, role and manager, add to db
// update employee role - prompt update new role and add to database
        // will need seperate dbs for each function
        // don't forget json stringify and json parse for data