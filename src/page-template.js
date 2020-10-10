// const employees = require("../index.js")

//create the about section
const generateCards = employees => {
    if (!employees) {
        return '';
    }
    for (i = 0; i < employees.length; i++)
        return `
        <div class="card-group">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        <h5>${employees[i].name}</h5>
                        <h6 class="card-subtitle">Employee TYPE: manager/engineer/intern</h6>
                    </div>
                    <p class="card-text">ID: ${employees[i].id}</p>
                    <p class="card-text">EMAIL: ${employees[i].email}</p>
                    <p class="card-text">OFFICE NUMBER/ GITHUB/ SCHOOL: ${"depends on employee(need IF statement)"}</p>
                </div >
            </div >
        </div >
    `;
};

const generatePage = employees => {
    return `
    < !DOCTYPE html >
        <html lang="en">

            <head>
                <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>Employee Info</title>
                            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                                <link rel="stylesheet" href="style.css">
        </head>

                                <body>
                                    <header>
                                        <h1>My Team</h1>
                                    </header>

                                    <main>
                                        ${generateCards(employees)}
                                    </main>
                                </body>
  </html>
    `;
};

module.exports = generatePage();
