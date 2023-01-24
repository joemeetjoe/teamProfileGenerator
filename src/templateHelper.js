// templates are built here using the classes.js object constructors

// constructs the header, this will be the same every time the program executes
let headerConstructor = () => {

`<!-- header that contains all of the basic HTML typings, and links boostrap stylesheets. -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>
<body>
    <nav class="navbar bg-secondary shadow" style = "height: 100px;">
        <div class="container-fluid d-flex justify-content-start">
            <span class="navbar-brand mb-0 h1 text-light fs-1">My Team</span>
        </div>
    </nav>
    <div class="container text-center">
        <div class="row">
`
};
// constructs the cards, this will happen for as many time as the user puts in employees, and will change based off of input
let cardConstructor = (name, employeeType, employeeSymbol, ID, email, officeNumOrGithub) => {
`
            <div class="col-lg-4">
                <div class="card-body shadow mt-3 rounded">
                    <div class = "bg-primary d-flex align-items-start flex-column shadow rounded-top">
                        <h5 class="card-title text-light p-1 ">${name}</h5>
                        <h6 class="card-subtitle mb-2 text-light p-1">${employeeType}</h6>
                        <span class="material-symbols-outlined text-light">
                            ${employeeSymbol}
                        </span>
                    </div>
                    <div class = "bg-body-tertiary rounded-bottom">
                        <ul class = "pt-3 pb-3">
                            <li class="card-text d-flex justify-content-start w-75 bg-white p-3 border rounded">${ID}</li>
                            <li class="card-text d-flex justify-content-start w-75 bg-white p-3 border rounded">${email}</li>
                            <li class="card-text d-flex justify-content-start w-75 bg-white p-3 border rounded">${officeNumOrGithub}</li>
                        </ul>
                    </div>
                </div>
            </div>
`
};
// constructs the footer, this will be the same every time the program executes
let footerConstructor = () => {
`   
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</body>
</html>
`
};