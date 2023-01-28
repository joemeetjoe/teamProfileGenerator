// requiring the file systems and inquirer npm packages, to write files and ask questions
const fs = require('fs');
const inquire = require('inquirer');
const templateHelper = require('./src/templateHelper')
// setting an empty array to save a potentially infinite amount of employees to. 
let employeeArray = [];
let presentRole = [];

// setting up an object constructor to ask different types of questions, based off of the employee type.
class Questions{
    constructor (typeOfEmployee, PhoneNumGithubOrSchool) {
        this.role = typeOfEmployee
        this.question1 = `What is the ${typeOfEmployee}'s name?`
        this.question2 = `What is the ${typeOfEmployee}'s ID?`
        this.question3 = `What is the ${typeOfEmployee}'s Email?`
        this.question4 = `What is the ${typeOfEmployee}'s ${PhoneNumGithubOrSchool}?`
        this.question5 = `What type of employee would you like to add?`
        this.prompts = () => {
            inquire.prompt([
                { 
                    type: 'input',
                    message: this.question1,
                    name: 'name',
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
                    name: 'PhoneNumGithubOrSchool',
                },
                { 
                    type: 'list',
                    message: this.question5,
                    name: 'employeeType',
                    choices: ['Engineer', 'Intern', 'No more employees-end program.']
                },
            ])
            .then((answers) => {
                presentRole.push(typeOfEmployee);
                employeeArray.push(answers);
                askEmployeeQuestions(answers);
            });
        };
    };
}


// plugging in the correct data for the object constructors
const managerQuestions = new Questions("team manager", "office number");
const engineerQuestions = new Questions("engineer", "Github username");
const internQuestions = new Questions("intern", "School");

// loops through engineer or intern based off of user response.
let askEmployeeQuestions = (answers) =>{
    if (answers.employeeType == "Engineer"){
        engineerQuestions.prompts();
    } else if (answers.employeeType == "Intern"){
        internQuestions.prompts();
    } else {
        templateConstruct(employeeArray, presentRole);
    };
};

// setting up an empty variable to take in the template literals
let template;
// grabs the templates from template helper and plugs in the answers
let templateConstruct = (answers, presentRole) => {
    template = templateHelper.headerConstructor();
    for (let i = 0; i < answers.length; i++){
        if (presentRole[i] == "team manager"){
            template += templateHelper.cardConstructor(answers[i].name, "Manager", "coffee", answers[i].id, `<a href= "mailto:${answers[i].email}"> ${answers[i].email} </a>`  , `Office number: ${answers[i].PhoneNumGithubOrSchool}`);
        } else if (presentRole[i] == "engineer"){
            template += templateHelper.cardConstructor(answers[i].name, "Engineer", "engineering", answers[i].id, `<a href= "mailto:${answers[i].email}"> ${answers[i].email} </a>`, `Github link: <a href=github.com/${answers[i].PhoneNumGithubOrSchool}>${answers[i].PhoneNumGithubOrSchool}</a>`);
        } else {
            template += templateHelper.cardConstructor(answers[i].name, "Intern", "person_filled", answers[i].id, `<a href= "mailto:${answers[i].email}"> ${answers[i].email} </a>`, `School: ${answers[i].PhoneNumGithubOrSchool}`);
        }
    };
    template += templateHelper.footerConstructor();
    writeHtmlFile(template);
};
// this function writes the index.HTML file with the concatenated template literal inside of it into the dist folder.
let writeHtmlFile = (template) => {
    let fileName = "index.HTML"
    fs.writeFile(`./dist/${fileName}`, template, (err) =>
    err ? console.error(err) : console.log("Success!"));
};



// initializing the program on startup, starting with the manager questions
let init = () => {
    console.log(`   
    Welcome to the team generator!
    
    `);
    managerQuestions.prompts();
};
// calling init function
init();
// exporting the functions that are tested inside of the tests folder. 
module.exports = {
    Questions,
    askEmployeeQuestions,
    engineerQuestions
}


