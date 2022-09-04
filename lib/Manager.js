const anEmployee = require('./Employee')

class Manager extends anEmployee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager