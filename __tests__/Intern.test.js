const Intern = require('../lib/Intern.js')

test('getRole returns "Intern"', () => {
    const intern = new Intern("marsha", 5, "marsha@gmail.com", "UCLA");
    const employeeRole = "Intern";
    const internSchool = "UCLA"

    expect(intern.getRole()).toBe(employeeRole);
    expect(intern.getSchool()).toBe(internSchool);
})