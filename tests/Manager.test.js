const testosteroneManager = require('../lib/Manager')

describe('testManager', () => {
    describe('Manager', () => {
        it('The Manager parameters should match the constants.', () => {
            const name = 'Test Name';
            const id = 97679869;
            const email = 'testexample@email.com';
            const officeNumber = '877-CASHNOW'
            const Manager = new testosteroneManager('Test Name', 97679769, 'testexample@email.com', '877-CASHNOW')
            expect(Manager.name).toEqual(name)
            expect(Manager.id).toEqual(id)
            expect(Manager.email).toEqual(email)
            expect(Manager.officeNumber).toEqual(officeNumber)
            expect(Manager.getRole()).toEqual('Manager')
        })
    })
})