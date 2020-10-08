const { test, expect } = require('@jest/globals');
const { string } = require('yargs');
const Employee = require('../lib/Employee.js')

test('explanation of what this test does', () => {
    const Employee = new Employee('parameters');

    expect(employee.name).toBe(expect.any(string));
}