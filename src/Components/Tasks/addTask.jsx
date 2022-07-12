import '../../stylesheets/addTask.css'
import { AiFillEdit } from "react-icons/ai";

// form""
const AddTask = () =>{
    return(
        <div className="task-edit-container">
            <span>Focus in...</span>
            <div className="input-container">
                <input className="input-task" placeholder='Write your task' />
                <div className='button-task-container'><AiFillEdit/></div>
            </div>
        </div>
    )
}

export default AddTask;