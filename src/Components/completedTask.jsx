import '../stylesheets/completeTask.css'

const CompletedTask = ()=>{
    return(
        <div className="completed-task-main-container">
            <div className='task-section'>
                <span>Tasks Finished</span>
                <hr></hr>
                <div className="completed-task-container">
                    <li>Tarea 1</li>
                    <li>Tarea 2</li>
                    <li>Tarea 3</li>
                    <li>Tarea 4</li>
                    <li>Tarea 5</li>

                </div>
            </div>
        </div>
    )
}

export default CompletedTask;