const navMenu = () => {
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
}

module.exports = navMenu;