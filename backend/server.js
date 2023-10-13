require('dotenv').config();
const express = require('express'); //requires the package
const mongoose = require('mongoose'); //requires mongoose

//connect to database

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        
        //listen for requests
        app.listen(process.env.PORT, () =>{
            console.log('connected to database & listening on port 4000');
        }); //1st param: port number from .env file
    })
        .catch((error)=>{
        console.log(error); //catches error if the uri or password is not okay
    })

const app = express(); //creates express app
const workoutRoutes = require('./routes/workouts');

//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method); //returns the path, for example '/' and the method for example POST
    next(); 
});

//routes
app.use('/api/workouts', workoutRoutes) //when we send req to the url it uses the workoutRoutes
