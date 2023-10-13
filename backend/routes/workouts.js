const express = require('express'); //requires express package
const workoutModel = require('../models/workoutModel');
const router = express.Router(); //creates an instance of the router

//Gets all workouts
router.get('/', (req, res) => {  //get data from router
res.json({message: "GET all workouts"});
});


//Gets a single workout
router.get('/:id', (req,res) => {;
    res.json({message : 'GET a single workout'})
})

//POST a new workout
router.post('/', async (req, res) =>{
    const {title, reps, load} = req.body;
    try{
        const workout = await workoutModel.create({title, load, reps}); //creates new workout doc
        res.status(200).json(workout); //returns json with the workout
    }
    catch(error){
        res.status(400).json({error: error.message});  //if it fails it returns the error
    }
})

//DELETE a new workout
router.delete('/:id', (req, res) =>{
    res.json({message: 'DELETE a workout'});
});

//UPDATE a new workout
router.patch('/:id', (req, res) =>{
    res.json({message: 'UPDATE a workout'});
});


module.exports = router; //export routes