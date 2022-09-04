const testingIntern = require('../lib/Intern')

describe('testIntern', () => {
    describe('Intern', () => {
        it('The Intern parameters should match the constants.', () => {
            const name = 'Test Name';
            const id = 97679869;
            const email = 'testexample@email.com';
            const school = 'Harvard'
            const intern = new testingIntern('Test Name', 97679769, 'testexample@email.com', 'Harvard')
            expect(intern.name).toEqual(name)
            expect(intern.id).toEqual(id)
            expect(intern.email).toEqual(email)
            expect(intern.school).toEqual(school)
            expect(intern.getRole()).toEqual('Intern')
        })
    })
})