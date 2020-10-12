//application invoked with index.js
const inquirer = require('inquirer');
const fs = require('fs');

//import employee classes
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const render = require('./src/renderhtml.js');

//create empty array to push user answers to prompts to
const employees = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name? (Required)",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter your manager name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's employee ID? (Required)",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email?"
        },
        {
            type: 'input',
            name: 'phone',
            message: "What is your manager's office number?",

        }
    ])
        .then(answers => {
            const newManager = new Manager(answers.name, answers.id, answers.email, answers.phone);
            employees.push(newManager);
            promptTeam();
        });
};

const promptTeam = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'option',
                message: 'Would you like to add an engineer, an intern, or finish building team?',
                choices: ['Engineer', 'Intern', 'Finished']
            }
        ])
        .then(answers => {
            if (answers.option === "Engineer") {
                promptEngineer();
            }
            else if (answers.option === "Intern") {
                promptIntern();
            }
            else {
                buildTeam();
            }
        });
}


const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name? (Required)",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter your intern's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern's employee ID? (Required)",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "Which school does your intern attend?",
        }
    ])
        .then(answers => {
            const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(newIntern);
            promptTeam();
        });
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name? (Required)",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter your engineer's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's employee ID? (Required)",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineers's Github username?",
        }
    ])
        .then(answers => {
            const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(newEngineer);
            promptTeam();
        });
};

function buildTeam() {
    fs.writeFileSync('./dist/index.html', render(employees), 'UTF8');
};

//STARTS RUNNING THE APP
promptManager();
