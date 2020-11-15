const http = require('http');
const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('middleware 1');
//     next(); // allows express to move on to next middleware in line
// });
//
// app.use((req, res, next) => {
//     console.log('middleware 2');
//     res.send('<h1>Hello from Express!!!!</h1>');
//     // next(); allows express to move on to next middleware in line
// });

// app.use allows us to add middleware (will be excecuted for every incoming request)
app.use('/users',(req, res, next) => {
    console.log('middleware for users');
    res.send('<h1>Users Page</h1>');
    // next(); allows express to move on to next middleware in line
});

app.use('/',(req, res, next) => {
    console.log('middleware for default');
    res.send('<h1>Hello from Express</h1>');
    // next(); allows express to move on to next middleware in line
});

const server = http.createServer(app);

server.listen(3000);
