const writeHtml = require('./write-file');


const generatePage = function (employee) {
    const pageContent =
    `
    <!DOCTYPE html>
    <html lang = "en">

        <head>
            <meta charset = "UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Comapatible" content="ie=edge">
            <title>The Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        </head>

        <body>
            <header class="h-auto border-bottom-1">
                <h1 class="font-weight-bold text-light text-center bg-primary py-4">My Team</h1>
            </header>

            <main>
                <div class="card-box d-flex justify-content-center flex-wrap">
                ${employee.filter(({office}) => office).map(({name, id, email, office}) =>{
                    return `
                    <div class = "card m-auto border-primary rounded shadow">
                        <h2 class = "bg-secondary text-light">${name}</h2>
                        <h4><img src="https://img.icons8.com/office/30/000000/manager.png"/> Manager</h4>
                        <p>ID: ${id}</p>
                        <p>Email: <a href="mailto: ${email}">${email}</a></p>
                        <p>Office: ${office}</p>
                    </div>
                    `
                })}
            
                ${employee.filter(({github}) => github).map(({name, id, email, github}) =>{
                    return `
                    <div class = "card m-auto border-primary rounded shadow">
                        <h2 class = "bg-secondary text-light">${name}</h2>
                        <h4><img src="https://img.icons8.com/dusk/30/000000/engineer.png"/> Engineer</h4>
                        <p>ID: ${id}</p>
                        <p>Email: <a href="mailto: ${email}">${email}</a></p>
                        <p>GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
                    </div>
                    `
                })}
            
                ${employee.filter(({school}) => school).map(({name, id, email, school}) =>{
                    return `
                    <div class = "card m-auto border-primary rounded shadow">
                        <h2 class = "bg-secondary text-light">${name}</h2>
                        <h4><img src="https://img.icons8.com/offices/30/000000/espresso-cup.png"/> Intern</h4>
                        <p>ID: ${id}</p>
                        <p>Email: <a href="mailto: ${email}">${email}</a></p>
                        <p>School: ${school}</p>
                    </div>
                    `
                })}

                </div>
            </main>
        </body>
    </html> 
    `

    writeHtml(pageContent);
};

module.exports = generatePage;