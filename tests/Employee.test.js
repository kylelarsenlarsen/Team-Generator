const testEmployee = require('../lib/Employee')

describe('testEmployee', () => {
    describe('Employee', () => {
        it('The Employee parameters should match the constants.', () => {
            const name = 'Test Name';
            const id = 97679869;
            const email = 'testexample@email.com';
            const employee = new testEmployee('Test Name', 97679869, 'testexample@email.com')
            expect(employee.name).toEqual(name)
            expect(employee.id).toEqual(id)
            expect(employee.email).toEqual(email)
            expect(employee.getRole()).toEqual('Employee')
        })
    })
})