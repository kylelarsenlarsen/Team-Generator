const inquirer = require('inquirer');
const fs = require('fs');
const renderHTML = require('./src/HTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const myTeam = [];

// in this next section i need to have a series of question to prompt the user with such as: questions for the manager's card, questions for the engineer's card, and questions for the intern's card. 
const userPrompt = () => {
    const prompt = [
        {
            type: 'input',
            message: "Manager's name:",
            name: 'nameofmanager'
        },
        {
            type: 'input',
            message: "Manager's ID:",
            name: 'idofmanager'
        },
        {
            type: 'input',
            message: "Manager's email:",
            name: 'emailofmanager'
        },
        {
            type: 'input',
            message: "Manager's office number:",
            name: 'officenumberofmanager'
        }
    ]
}

const engineerPrompt = () => {
    const prompt = [
        {
            type: 'input',
            message: "Engineer's name:",
            name: 'nameofengineer'
        },
        {
            type: 'input',
            message: "Engineer's ID:",
            name: 'idofengineer'
        },
        {
            type: 'input',
            message: "Engineer's email:",
            name: 'emailofengineer'
        },
        {
            type: 'input',
            message: "Engineer's GitHub URL:",
            name: 'githubofengineer'
        }
    ]
}

const internPrompt = () => {
    const prompt = [
        {
            type: 'input',
            message: "Intern's name:",
            name: 'nameofintern'
        },
        {
            type: 'input',
            message: "Intern's ID:",
            name: 'idofintern'
        },
        {
            type: 'input',
            message: "Intern's email:",
            name: 'emailofintern'
        },
        {
            type: 'input',
            message: "Intern's school:",
            name: 'schoolofintern'
        }
    ]
}

// there needs to be a function to ask whether we would like to add another employee. there needs to be a return so we can populate our html file with the user input.
const response = () => {
    const prompt = [
        {
            type: 'list',
            name: 'option',
            message: "Add team member?",
            choices: [
                {name: 'Engineer', value: 'option1'},
                {name: 'Intern', value: 'option2'},
                {name: 'Generate Team', value: 'option3'}
            ]
        }
    ]
}