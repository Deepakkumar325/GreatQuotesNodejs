require('dotenv').config();
const express = require('express');
const  mongoose  = require('mongoose');
const app = express();
const path = require('path');
const routes = require('./routes/routes')
const methodOverride = require('method-override');

mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("mongodb connect")})
.catch(()=>{console.log("Failed to connect")});

// body-parser , middleware
app.use(express.urlencoded({ extended: true })); //for form data

// templete engine 
app.use(express.json());
const views = path.join(__dirname,'views');
app.set('view engine','ejs');
app.set("views",views);

app.use(methodOverride('_method'))
// for static file
app.use(express.static(path.join(__dirname,'public')))


// for routes 
app.use(routes);



 

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server listen at ${port}`);
})
