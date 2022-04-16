import React from 'react'
import { ITask } from '../Interfaces'
import { AiFillDelete } from "react-icons/ai";

interface Props{
    task:ITask,
    deleteTask:(taskNameToDelete:string)=>void

}

const TodoTask = ({task, deleteTask}:Props) => {
  return (
    <div className='task'>
        <div className='content'>
            <span>{task.taskName}</span>
            <span>{task.process}</span>


        </div>
        <button onClick={()=>{
            deleteTask(task.taskName)
        }}>
            <AiFillDelete/>
        </button>
    </div>
  )
}   

export default TodoTask
     