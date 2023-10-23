import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
require('date-fns')

const WorkoutDetails = ({workout}) =>{
    const { dispatch } = useWorkoutsContext()
    
    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({
                type: 'DELETE_WORKOUT', payload : json
            })
        }
    }

    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): {workout.load}</strong></p>
            <p><strong>Reps : {workout.reps}</strong></p>
            <p><strong>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix : true})}</strong></p>
            <span onClick ={handleClick}>Delete</span>

        </div>
    )
}

export default WorkoutDetails