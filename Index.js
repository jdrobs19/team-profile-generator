const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const generatePage = require('./src/generate-page');

let employeeArr = [];

const addManager = function(){
    inquirer
    .prompt([
        {
        type: 'text',
        name: 'name',
        message: 'What is the manager name?'
    },
    {
        type: 'text',
        name: 'id',
        message: "What is the manager's employee ID number?"
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the manager's email address?"
    },
    {
        type: 'text',
        name: 'office',
        message: "What is the manager's office number?"
    }
])
.then(({name, id, email, office}) =>{
    let manager = new Manager(name, id, email, office);
    employeeArr.push(manager);
    addAdditional();
});
}

const addEngineer = function(){
    inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the engineer name?'
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the engineer's employee ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the engineer's email address?"
        },
        {
            type: 'text',
            name: 'github',
            message: "What is the engineer's GitHub username?"
        }
    ])
    .then(({name, id, email, github}) => {
        let engineer = new Engineer(name, id, email, github);
        employeeArr.push(engineer);
        addAdditional();
    }); 
}

const addIntern = function(){
    inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the intern name?'
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the intern's employee ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'text',
            name: 'school',
            message: "What is the school's school?"
        }
    ])
    .then(({name, id, email, school}) => {
        let intern = new Intern(name, id, email, school);
        employeeArr.push(intern);
        addAdditional();
    }); 
}

const addAdditional = function(){
    inquirer
    .prompt(
        {
            type: 'list',
            name: 'action',
            message: 'Would you like to add additional employees?',
            choices: ['Add engineer', 'Add intern', 'No additional employees']
        }
    )
    .then(({action}) => {
        if(action === 'Add engineer'){
            addEngineer();
        }
        else if(action === 'Add intern'){
            addIntern();
        }
        else{
            generatePage(employeeArr);
        }
    })
}

addManager();