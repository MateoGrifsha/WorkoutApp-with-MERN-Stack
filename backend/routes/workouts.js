const express = require('express'); //requires express package

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
router.post('/', (req, res) =>{
    res.json({message: 'Add a new workout: '})
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