const fs = require('fs');
const path = require('path');
const templatesdir = path.resolve(__dirname, '../templates');

const render = employees => {
    const html = [];
    html.push(...employees.filter(employees => employees.getRole() === "Manager").map(manager => renderManager(manager)).join(""));
    html.push(...employees.filter(employees => employees.getRole() === "Intern").map(intern => renderIntern(intern)).join(""));
    html.push(...employees.filter(employees => employees.getRole() === "Engineer").map(engineer => renderEngineer(engineer)).join(""));
    return renderMain(html.join(""));
}

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesdir, 'manager.html'), 'UTF8')
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "phone", manager.getPhone());
    return template;
}


const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesdir, 'intern.html'), 'UTF8')
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
}

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesdir, 'engineer.html'), 'UTF8');
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
}

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesdir, 'main.html'), 'UTF8');
    return replacePlaceholders(template, 'team', html);
}

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{" + placeholder + "}}", "gm");
    return template.replace(pattern, value)
}

module.exports = render;