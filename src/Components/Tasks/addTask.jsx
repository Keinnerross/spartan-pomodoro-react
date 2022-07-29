import React, { useState } from 'react';
import '../../stylesheets/addTask.css'
import { AiFillEdit } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';


const AddTask = ( { onSubmit } ) =>{

    const [input, setInput] = useState('');

    const mainChange = e =>{
        setInput(e.target.value);
        
    }

    const mainSend = e =>{

        e.preventDefault();

        const newTask = {
        id: uuidv4(),
        title: input,
        completed: false
        }

        onSubmit(newTask);
    }


    return(
        <div className="task-edit-container">
            <span>Focus in...</span>
       {/*Form*/}
            <form className="form" onSubmit={mainSend}>
                <input className="input-task" placeholder='Write your task' onChange={mainChange}/>
                <div className='button-task-container'><AiFillEdit/></div>
            </form>
        </div>
    )
}

export default AddTask;