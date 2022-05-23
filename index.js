/* Importing the express module. */
let express = require('express');
let app = express();
let ejs = require('ejs');
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;

/* Telling the server to use the public folder as a static folder. */
app.use(express.static('public'))
app.set('view engine', 'ejs');

/* A function that is called when the server receives a request. */
app.get('/', (req, res) => {
  res.render('index', {haikus: haikus});
});

/* Telling the server to listen for requests on the port specified. */
app.listen(port);