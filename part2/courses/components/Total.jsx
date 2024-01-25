const Total = ({parts}) => {
    const totalExercises = parts.reduce((total,actual) => {
        return total + actual.exercises
    },0)

    return(
        <div><p><b>total of {totalExercises} exercises</b></p></div>
    )
}

export default Total