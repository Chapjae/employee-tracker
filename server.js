const inquirer = require('inquirer');
const mysql = require('mysql2');

const questions = [
    {
        type : "list",
        name : "options",
        message : "What would you like to do?",
        choices : ["View All Departments", "View All Roles", "View All Employees", "Add a Department", 
                   "Add a Role", "Add an Employee", "Update an Employee", "Nevermind I'm done"]
    },
  ]

  const db = mysql.createConnection(
    {
      host: 'localhost',
      user: "root",
      password: "password",
      database: "departments_db"
    },       
    console.log("connected"),
    navMenu()
  );

function getDepts() {
  return db.promise().query("SELECT departments.id, departments.name FROM departments;")
}

function getRoles() {
  return db.promise().query("SELECT roles.id, roles.job_title, roles.salaries, roles.department_id FROM roles;");
}

function getEmployees() {
  return db.promise().query("SELECT first_name, last_name, id, role_id, manager_id FROM employees");
}

const departmentQuestion = [{name: "dept", message: "What is the name of the department you would like to add?"}];  

function navMenu () {
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
          process.exit(0);
    } 
  });
};

const viewAllDepartments = () => {
    db.query("SELECT * FROM departments", (err, res) => {
      if (err) {
        console.log(err);
      }
      console.table(res);
      navMenu()
  });
}

const viewAllRoles = () => {
  db.query("SELECT * FROM roles", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    navMenu()
  });
}  

const viewAllEmployees = () => {
  db.query("SELECT * FROM employees", (err, res) => {
    if(err) {
      console.log(err);
    }
    console.table(res);
    navMenu()
  });
}  

const addDepartment = () => {
  inquirer.prompt(departmentQuestion)
  .then(({dept}) => {
   db.query("INSERT INTO departments (name) VALUE (?)", dept, (err, res) => {
      if(err) {
        console.log(err);
      }
      console.table(res);
      viewAllDepartments()
    });
   });
}

const addRole = () => {
  getDepts()
  .then(([rows]) => {
    let dept = rows;
    const deptChoice = dept.map(({id, name}) => ({
      name: name,
      value: id
    }))
  inquirer.prompt([{name: "title", message: "What is this role called?"},
                   {name: "salary", message: "How much does this role get paid?"},
                   {type: "list", name: "department", message: "What department does this role belong to?",
                    choices: deptChoice
                  }])
    .then((answers) => {
      const role = answers.title;
      const salary = answers.salary;
      const department = answers.department;
    db.query("INSERT INTO roles (job_title, salaries, department_id) VALUES ( ?, ?, ?)", [role, salary, department], (err, res) => {
      if(err) {
        console.log(err);
      }
      console.log("Role added!");
      console.table(res)
      viewAllRoles()
    });
  });
});
}

const addEmployee = () => {
  getRoles()
  .then(([rows]) => {
    let roles = rows;
    const roleChoice = roles.map(({job_title, id}) => ({ name: job_title, value: id}))
    inquirer.prompt([
                    {type: "input", name: "first_name", message: "What is the employee's first name?"},
                    {type: "input", name: "last_name", message: "What is the employee's last name?"},                                                                                
                    {type: "list", name: "role", message: "What is the employee's role?", choices: roleChoice }, 
                    {type: "input", name: "manager", message: "Who is the employee's manager?"}
                    ])
      .then((answers) => {
        const first_name = answers.first_name;
        const last_name = answers.last_name;
        const role = answers.role;
        const manager = answers.manager;
      db.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",  [first_name, last_name, role, manager], (err, res) => {
      if(err) {
        console.log(err);
      }
      console.table(res);
      viewAllEmployees()
    });
  });
});
}

const updateEmployee = () => {
  getRoles()
    .then(([rows]) => {
      let roles = rows;
      const roleChoice = roles.map(({job_title, id}) => ({name: job_title, value: id }))
  getEmployees()
  .then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map((employee) => ({
    name: `${employee.first_name} ${employee.last_name}`,
    value: employee.id,}))
    console.log(employeeChoices)
    inquirer.prompt([
      {type: "list", name: "employee", message: "Which employee needs to be updated?", choices: employeeChoices},
      {type: "list", name: "role", message: "What role is this employee now?", choices: roleChoice }
    ])
    .then((answers) => {
      const selectedEmployee = answers.employee
      const selectRole = answers.role
    db.query("UPDATE employees SET role_id = ? WHERE id = ?", [selectRole, selectedEmployee], (err, res) => {
      if(err) {
        console.log(err);
      } 
        console.table(res);
      viewAllEmployees();
    });
  })
})
})
}
