const anEmployee = require('./Employee');

class Manager extends anEmployee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;