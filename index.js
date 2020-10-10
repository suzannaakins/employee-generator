//application invoked with index.js - this is file that has starter coe
// will include user prompts using inquirer

const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const {writeFile, copyFile} = require('./utils/generate-site.js');

const employees = [];

//prompts to user
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name?",
            // validate: name => {
            //     if (usernameInput) {
            //         return true;
            //     } else {
            //         console.log('Please enter your Github username.');
            //         return false;
            //     }
            // }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email?"        },
        {
            type: 'input',
            name: 'phone',
            message: "What is your manager's office number?",
    
        }
    ])
    .then(answers => {
        const newManager = new Manager (answers.name, answers.id, answers.email, answers.phone);
        employees.push(newManager);
        promptTeam();
    });
};

const promptTeam = () => {
    //list
    //can use switch to call different prompt function depending on user answer/value
    //at end of functions, "break"
    //have default - default is generate HTML function call
}

const promptIntern = () => {

}

const promptEngineer = () => {
    
}

//function to initialize app
const init