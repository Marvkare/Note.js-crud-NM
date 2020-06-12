const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Initializations
const app = express();


//Settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layautDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
//Middlewares
app.use(express.urlencoded({extended:false}))//le dice al servidor que cada vez que lleguen datos al servidor de un formulario los tratara de convertir esos datos en json 


//Global variables

//Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))

app.get('/h', (req, res)=>{
    res.render('h')
})
//Static files 
app.use(express.static(path.join(__dirname + '/public')));

module.exports = app;