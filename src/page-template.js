//create the about section
const generateCards = cardsText => {
    if (!cardsText) {
        return '';
    }
    return `
        <div class="card-group">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        <h5>${employees.name}</h5>
                        <h6 class="card-subtitle">Employee TYPE: manager/engineer/intern</h6>
                    </div>
                    <p class="card-text">ID: ${employees.id}</p>
                    <p class="card-text">EMAIL: ${employees.email}</p>
                    <p class="card-text">OFFICE NUMBER/ GITHUB/ SCHOOL: ${depends on employee(need IF statement)
}</p>
                </div >
            </div >
        </div >
    `;
};

generatePage = templateData => {

    // //destructure projects and about data from templateData based on their property key names
    // const { projects, about, ...header } = templateData;

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
                                        ${generateCards()}
                                    </main>
                                </body>
  </html>
    `;
};

module.exports = generatePage;