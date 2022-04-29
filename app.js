const express = require('express');
const app = express();


app.get('/',function(req,res){
    res.send('Bienvenidos a mi sitio');
});








app.listen(3001,function(){
    console.log('Servidor funcionando')
});
