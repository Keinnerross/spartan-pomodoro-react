import React, { useState } from 'react';
import '../../stylesheets/taskList.css';
import AddTask from './addTask';
import Task from './task';

const TaskList = ()=>{

    const [tasks, setTasks] = useState([]); 

    const addTask = task =>{
        if(task.title.trim()){
            task.title =  task.title.trim();
            const taskUpdate = [task, ...tasks];
            setTasks(taskUpdate);
            console.log(task);
           
        }


    }

    return(        
        <div className="task-list-main-container">
            <AddTask onSubmit={addTask}/>
            <div className='task-section'>
                    <span>Tasks Finished</span>
                    <hr></hr>

               
                    <div className="task-list-container">
                       
                        {
                            tasks.map((task) =>
                                <Task
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    completed={task.completed}
                                />
                            )
                        }
                    </div> 
               
                
            </div>
        </div>  
    )
}

export default TaskList;