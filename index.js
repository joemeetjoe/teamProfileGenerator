// requiring the file systems and inquirer npm packages, to write files and ask questions
const fs = require('fs');
const inquire = require('inquirer');
const templateHelper = require('./src/templateHelper.js')
// setting an empty array to save a potentially infinite amount of employees to. 
let employeeArray = [];
// setting ujp an object constructor to ask different types of questions, based off of the employee type.
function Questions(typeOfEmployee, PhoneNumOrGithub,) {
    this.question1 = `What is the ${typeOfEmployee}'s name?`
    this.question2 = `What is the ${typeOfEmployee}'s ID?`
    this.question3 = `What is the ${typeOfEmployee}'s Email?`
    this.question4 = `What is the ${typeOfEmployee}'s ${PhoneNumOrGithub}?`
    this.question5 = `What type of employee would you like to add?`
    this.prompts = () => {
        inquire.prompt([
            { 
                type: 'input',
                message: this.question1,
                name: 'Name',
            },
            { 
                type: 'input',
                message: this.question2,
                name: 'id',
            },
            { 
                type: 'input',
                message: this.question3,
                name: 'email',
            },
            { 
                type: 'input',
                message: this.question4,
                name: 'numOrGithub',
            },
            { 
                type: 'input',
                message: this.question5,
                name: 'employeeType',
            },
        ])
        .then((answers) => {
            // console.log(answers);
            employeeArray.push(answers);
            askEmployeeQuestions(answers);
        });
    };
};

// plugging in the correct data for the object constructors
const managerQuestions = new Questions("team manager", "office number");
const engineerQuestions = new Questions("engineer", "Github username");
const internQuestions = new Questions("intern", "Github username");

// loops through engineer or intern based off of user response.
let askEmployeeQuestions = (answers) =>{
    if (answers.employeeType == "Engineer"){
        engineerQuestions.prompts();
    } else if (answers.employeeType == "Intern"){
        internQuestions.prompts();
    } else {
        templateConstruct(answers);
    };
};

// setting up an empty variable to take in the template literals
let template;
// grabs the templates from template helper and plugs in the answers
let templateConstruct = () => {
    template = headerConstructor();
    for (let i = 0; i < employeeArray.length; i++){
        template += cardConstructor([i].name, [i].employeeType, coffee, [i].email, [i].NumOrGithub);
        console.log(template);
    };
};

// initializing the program on startup, starting with the manager questions
let init = () => {
    console.log(`   
    Welcome to the team generator!
    
    Use 'npm run reset' to reset the dist/ folder.
    
    `);
    managerQuestions.prompts();
};
init();

