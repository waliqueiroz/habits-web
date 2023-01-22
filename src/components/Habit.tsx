interface HabitProps {
    completed: number
}

function Habit(props: HabitProps) {
    return (
        <div className="bg-black text-white text-center">completed: {props.completed}</div>
    )
}

export default Habit