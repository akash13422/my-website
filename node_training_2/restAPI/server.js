const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.use(express.json());

const courses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' },
    { id: 4, name: 'course 4' },
    { id: 5, name: 'course 5' },
];


// GET
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/courses', (req, res) => {
    res.send('Hello World!')
})

// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id);
// })

//multiple parameter
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
})

//qurty string parameter
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.query);
})

//find 
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("The course with the given ID was not found")

    res.send(course)
});

//POST METHOD

app.post('/api/courses', (req, res) => {

    //basic input validation 
    // if (!req.body.name || req.body.name.length < 3) {
    //     res.status(400).send("Name is required and should be minimum 3 char");
    //     return
    // }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(courses);
    res.send(course)
});


//PUT METHOD
app.put('/api/courses/:id', (req, res) => {
    course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("The course with the given ID was not found")

    course.name = req.body.name;
    res.send(course)
});

//DELETE METHOD
app.delete('/api/courses/:id', (req, res) => {
    course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("The course with the given ID was not found")

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course)
});

//envoirnment variable 
//const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



/* Enviornment variable
Environment Variables are variables that are set by the Operating System.
They are decoupled from application logic.
They can be accessed from applications and programs through various APIs.
There is a Node. js library called dotenv that helps you manage and load environment variables.

set PORT=5000
*/