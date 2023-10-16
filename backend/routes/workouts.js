const express = require('express'); //requires express package
const router = express.Router(); //creates an instance of the router

const {
    createWorkout,
    getOneWorkout,
    getAllWorkouts,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutController');

//Gets all workouts
router.get('/', getAllWorkouts);


//Gets a single workout
router.get('/:id', getOneWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a new workout
router.delete('/:id', deleteWorkout);

//UPDATE a new workout
router.patch('/:id', updateWorkout);


module.exports = router; //export routes