var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//setup template engine
app.set('view engine' , 'ejs');

//static files
 app.use(express.static('./public'));

//fire todoController
todoController(app);

//listen to port 
app.listen(9000 , () => {
console.log('Server is running');
});