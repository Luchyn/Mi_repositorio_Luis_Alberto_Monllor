const express = require('express');
const { engine } = require('express/lib/application');
const path = require('path');
const app = express();





/*----------------------IMPORTANDO RUTAS-----------------------*/


const homeRoute = require('./src/routes/homeRoute');

const contactRoute = require('./src/routes/contactRoute');

const aboutMeRoute = require('./src/routes/aboutMeRoute');

const worksRoute = require('./src/routes/worksRoute');

/*-------------RUTEO DE VISTAS-----------------------*/

app.use('/',homeRoute);

app.use('/contact',contactRoute);

app.use('/aboutMe',aboutMeRoute);

app.use('/works',worksRoute);

/*---------------------------MOTOR DE PLANTILLAS--------------------- */


app.set('view engine','ejs');
app.set('views','src/views');




app.use(express.static(path.join(__dirname, './public')));

app.listen(3001,function(){
    console.log('Servidor funcionando')
});
