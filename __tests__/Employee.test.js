//parent file (like "Character" in jest-another-RPG app)
const Employee = require('../lib/Employee.js')

test('Can create a New "Employee" constructor', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});