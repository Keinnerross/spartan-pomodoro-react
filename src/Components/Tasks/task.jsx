import '../../stylesheets/task.css'

const Task =  ({ id, title, completed, completedTask, delateTask }) =>{
    return(
        <div className={completed ? 'task-container completed' :
        'task-container'}>
            <div className='title-task'>
                {title}
            </div>
            <div className='task-icon-container'>x</div>
        </div>
     
    )
}

export default Task;