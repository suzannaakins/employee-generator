const Manager = require('../lib/Manager.js')

test('getRole returns "Manager"', () => {
    const manager = new Manager("Henrietta", 1, "henriettahippo@gmail.com", "9165550948");
    const employeeRole = "Manager";
    const managerPhone = "9165550948";

    expect(manager.getRole()).toBe(employeeRole);
    expect(manager.getPhone()).toBe(managerPhone);
})