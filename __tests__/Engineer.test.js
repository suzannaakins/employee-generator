const Engineer = require('../lib/Engineer.js')

test('getRole returns "Engineer"', () => {
    const engineer = new Engineer("bobby", 2, "bobby@gmail.com", "bobbysgithub");
    const engineerRole = "Engineer";
    const engineerGithub = "bobbysgithub"

    expect(engineer.getRole()).toBe(engineerRole);
    expect(engineer.getGithub()).toBe(engineerGithub);
})