import '../../stylesheets/task.css'

const Task =  ({ id, title, completed, completedTask, delateTask }) =>{
    return(
        <div className={completed ? 'task-container completed' :
        'task-container'}>
            <div className='title-task' onClick={()=> completedTask(id)}>
                {title}
            </div>
            <div className='task-icon-container' onClick={()=> delateTask(id)}>x</div>
        </div>
     
    )
}

export default Task;