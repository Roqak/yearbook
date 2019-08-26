const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 9000
const mongoose = require('mongoose');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();
const index = require('./routes/index');

mongoose.connect(process.env.ss,{ useNewUrlParser: true })
.then((result)=>{
    console.log("Database Connected Successfully.")
})
.catch(err=>{
    console.log(err)
})
app.use('/',index);

app.listen(port,()=>{
    console.log("Listening.....")
})