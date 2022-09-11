const theGeneratedTeam = (myTeam) => {
    const generatedTeam = [];

    const populateManager = manager => {
        let managerSegment = `<section class="card" style="width: 350px">
        <div class="card-header" style="background: rgba(11, 74, 134, 0.856); color: white;">
        <h3 class="card-title">INSERT NAME</h3>
        <h4 class="card-title"><i class="fa-solid fa-mug-saucer"></i>Manager</h4>
        </div>
        <div class="card-body" style="background:rgb(250, 250, 255)">
        <ul class="list-group">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">Office Number: </li>
        </ul>
    </div>
    </section>`;
    }
    
    const populateEngineer = engineer => {
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
    }

    const populateIntern = intern => {
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
    }

}

