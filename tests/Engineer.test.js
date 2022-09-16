const testlyEngineer = require('../lib/Engineer')

describe('testEngineer', () => {
    describe('Engineer', () => {
        it('The Engineer parameters should match the constants.', () => {
            const name = 'Test Name';
            const id = 97679869;
            const email = 'testexample@email.com';
            const github = 'https://github.com/kylelarsenlarsen'
            const engineer = new testlyEngineer('Test Name', 97679869, 'testexample@email.com', 'https://github.com/kylelarsenlarsen')
            expect(engineer.name).toEqual(name)
            expect(engineer.id).toEqual(id)
            expect(engineer.email).toEqual(email)
            expect(engineer.github).toEqual(github)
            expect(engineer.getRole()).toEqual('Engineer')
        })
    })
})