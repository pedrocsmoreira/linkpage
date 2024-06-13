const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.listen(8080);
console.log('Server ready on port http://localhost:8080');

let router = express.Router();

const routes = require('./routes');

app.use('/', routes);

module.exports = router;
