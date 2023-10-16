const workoutModel = require('../models/workoutModel');
const mongoose = require('mongoose');


//GET all workouts.
const getAllWorkouts = async (req, res) => {
    const workout = await workoutModel.find({}).sort({createdAt: -1});
    res.status(200).json(workout);
}
//GET a single workout
const getOneWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout!'});
    }
    res.status(200).json(workout);

    const workout = await workoutModel.findById(id);
    if(!workout){
        return res.status(400).json({error: 'No such workout'});
    }

}
//CREATE new workout
const createWorkout = async (req, res) =>{
   
        const {title, reps, load} = req.body;

        //add a new doc to the database
        try{
            const workout = await workoutModel.create({title, load, reps}); //creates new workout doc
            res.status(200).json(workout); //returns json with the workout
        }
        catch(error){
            res.status(400).json({error: error.message});  //if it fails it returns the error
        }
}
//DELETE a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout!'});
    }
    const workout = await workoutModel.findOneAndDelete({_id: id});

    if(!workout){
        return res.status(400).json({error: 'No such workout'});
    }
    res.status(200).json(workout);
}
//UPDATE a workout
const updateWorkout =async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout!'});
    }
    const workout = await workoutModel.findOneAndDelete({_id: id}, {
        ...req.body
    });
    if(!workout){
        return res.status(400).json({error: 'No such workout'});
    }
    res.status(200).json(workout);
}

//export the function
module.exports = {
    createWorkout ,
    getOneWorkout,
    getAllWorkouts,
    deleteWorkout,
    updateWorkout
}