const inquirer = require('inquirer');
const fs = require('fs');
const renderHTML = require('./src/HTML');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
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
        
    ]
}