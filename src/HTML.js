const theGeneratedTeam = (myTeam) => {
    const generatedTeam = [];

    let populateManager = manager => {
        let managerSegment = `<section class="card" style="width: 350px">
        <div class="card-header" style="background: rgba(11, 74, 134, 0.856); color: white;">
        <h3 class="card-title">${manager.name}</h3>
        <h4 class="card-title"><i class="fa-solid fa-mug-saucer"></i>Manager</h4>
        </div>
        <div class="card-body" style="background:rgb(250, 250, 255)">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
    </section>`;
        generatedTeam.push(managerSegment);
    }

    let populateEngineer = engineer => {
        let engineerSegment = `<section class="card" style="width: 350px">
        <div class="card-header" style="background: rgba(11, 74, 134, 0.856); color: white;">
        <h3 class="card-title">${engineer.name}</h3>
        <h4 class="card-title"><i class="fa-solid fa-wrench"></i>Engineer</h4>
        </div>
        <div class="card-body" style="background:rgb(250, 250, 255)">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
    </section>`;
        generatedTeam.push(engineerSegment);
    }

    let populateIntern = intern => {
        let internSegment = `<section class="card" style="width: 350px">
        <div class="card-header" style="background: rgba(11, 74, 134, 0.856); color: white;">
        <h3 class="card-title">${intern.name}</h3>
        <h4 class="card-title"><i class="fa-solid fa-graduation-cap"></i>Intern</h4>
        </div>
        <div class="card-body" style="background:rgb(250, 250, 255)">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </section>`;
        generatedTeam.push(internSegment);
    }

    for(member of myTeam) {
        if(member.getRole() === 'Manager') {
            populateManager(member)
        }
        if(member.getRole() === 'Engineer') {
            populateEngineer(member)
        }
        if(member.getRole() === 'Intern') {
            populateIntern(member)
        }
    }

    return generatedTeam.join('')
    
}

function renderHTML(myTeam) {
    return `<!DOCTYPE html>

    <html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Generator</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/78a2821f83.js" crossorigin="anonymous"></script>
    </head>
    
    <body>

    <nav class="text-center" style="background:rgba(233, 83, 14, 0.76)">
    <p class="fs-1 text-white">Your Team</p>
    </nav>

    <div class="team justify-content-center d-flex flex-wrap" style="margin-top: 50px; gap: 20px;">

    ${theGeneratedTeam(myTeam)}

    </div>

    </body>

    </html>`
}

module.exports = renderHTML