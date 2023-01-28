// imports the question class from the index.js folder
const question = require('../index');
// plugs in the value of team manager and office number into the questions class and expects the correct answer
describe("Questions-manager", () => {
    describe("Initialization", () => {
        it("should create an object with Manager questions when called.", () =>{
            const managerQuestions = new question.Questions("team manager", "office number");

            
            expect(managerQuestions.question1).toEqual("What is the team manager's name?")
            expect(managerQuestions.question2).toEqual("What is the team manager's ID?")
            expect(managerQuestions.question3).toEqual("What is the team manager's Email?")
            expect(managerQuestions.question4).toEqual("What is the team manager's office number?")
        });
    });
});
// plugs in the value of engineer and Github username into the questions class and expects the correct answer
describe("Questions-Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with Engineer questions when called.", () =>{
            const managerQuestions = new question.Questions("engineer", "Github username");

            
            expect(managerQuestions.question1).toEqual("What is the engineer's name?")
            expect(managerQuestions.question2).toEqual("What is the engineer's ID?")
            expect(managerQuestions.question3).toEqual("What is the engineer's Email?")
            expect(managerQuestions.question4).toEqual("What is the engineer's Github username?")
        });
    });
});
// plugs in the value of intern and school into the questions class and expects the correct answer
describe("Questions-Intern", () => {
    describe("Initialization", () => {
        it("should create an object with Intern questions when called.", () =>{
            const managerQuestions = new question.Questions("intern", "school");

            
            expect(managerQuestions.question1).toEqual("What is the intern's name?")
            expect(managerQuestions.question2).toEqual("What is the intern's ID?")
            expect(managerQuestions.question3).toEqual("What is the intern's Email?")
            expect(managerQuestions.question4).toEqual("What is the intern's school?")
        });
    });
});
// plugs in the Ask Employee questions an answer that tests the if else if statement and returns the proper value.
describe("Ask Employee Questions", () => {
    describe("Initialization", () => {
        it("should ask Engineer questions if the first statement is true", () =>{
            const askEmployeeQuestions = question.askEmployeeQuestions({
                employeeType: "Engineer",
            });
            expect(askEmployeeQuestions).toEqual(question.engineerQuestions.prompts())
            
        });
    });
});
