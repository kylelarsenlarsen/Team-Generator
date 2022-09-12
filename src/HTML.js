const theGeneratedTeam = (myTeam) => {
    const generatedTeam = [];

    let populateManager = manager => {
        let managerSegment = `<section class="card" style="width: 350px">
        <div class="card-header" style="background: rgba(11, 74, 134, 0.856); color: white;">
        <h3 class="card-title">${manager.nameofmanager}</h3>
        <h4 class="card-title"><i class="fa-solid fa-mug-saucer"></i>Manager</h4>
        </div>
        <div class="card-body" style="background:rgb(250, 250, 255)">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.idofmanager}</li>
            <li class="list-group-item">Email: ${manager.emailofmanager}</li>
            <li class="list-group-item">Office Number: ${manager.officenumberofmanager}</li>
        </ul>
    </div>
    </section>`;
    generatedTeam.push(managerSegment);
    }
    
    let populateEngineer = engineer => {
        let engineerSegment = `<section class="card" style="width: 350px">
        <div class="card-header" style="background: rgba(11, 74, 134, 0.856); color: white;">
        <h3 class="card-title">INSERT NAME</h3>
        <h4 class="card-title"><i class="fa-solid fa-wrench"></i>Engineer</h4>
        </div>
        <div class="card-body" style="background:rgb(250, 250, 255)">
            <ul class="list-group">
                <li class="list-group-item">ID:</li>
                <li class="list-group-item">Email:</li>
                <li class="list-group-item">Office Number:</li>
            </ul>
        </div>
    </section>`;
    generatedTeam.push(engineerSegment);
    }

    let populateIntern = intern => {
        let internSegment = `<section class="card" style="width: 350px">
        <div class="card-header" style="background: rgba(11, 74, 134, 0.856); color: white;">
        <h3 class="card-title">INSERT NAME</h3>
        <h4 class="card-title"><i class="fa-solid fa-graduation-cap"></i>Intern</h4>
        </div>
        <div class="card-body" style="background:rgb(250, 250, 255)">
            <ul class="list-group">
                <li class="list-group-item">ID:</li>
                <li class="list-group-item">Email:</li>
                <li class="list-group-item">Office Number:</li>
            </ul>
        </div>
    </section>`;
    generatedTeam.push(internSegment);
    }

    for(const bodySegment of generatedTeam) {`<!DOCTYPE html>

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
        ${bodySegment}
        </body>

        </html>`
    }
}

fs.writeFile('index.html', generatedTeam, (err) =>
      err ? console.log(err.message) : console.log('Successfully created index.html!')
    );
