const WorkoutDetails = ({workout}) =>{
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): {workout.load}</strong></p>
            <p><strong>Reps : {workout.reps}</strong></p>
            <p><strong>{workout.createdAt}</strong></p>

        </div>
    )
}

export default WorkoutDetails