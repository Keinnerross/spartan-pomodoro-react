import '../../stylesheets/completeTask.css';
import Task from './task';

const CompletedTask = ()=>{
    return(
        <div className="completed-task-main-container">
            <div className='task-section'>
                <span>Tasks Finished</span>
                <hr></hr>
                <div className="completed-task-container">
                    <Task
                        title = 'Holaxd'
                    />
                   
                
                </div>
            </div>
        </div>
    )
}

export default CompletedTask;