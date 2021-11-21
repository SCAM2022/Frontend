
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const authenticationRoutes = require('./router/auth');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// console.log('yha')
app.use(authenticationRoutes)

mongoose.connect('added by you'
         )
         .then(result =>{
             console.log('Connected !');
             app.listen(3000);
         })
         .catch(err =>{
             console.log(err)
         })
 
