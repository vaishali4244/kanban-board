import React from 'react';
import './task.css';


const Task = (props) => {
  return (
    <div key={props?.id} className='task-container ' >
      <p className='subtitle'>
        {props?.subtitle ?? "null"}
      </p>
      <div className='task-ul'>
        <p className='task-li'> <img
          src={require("../assets/images/Unchecked.png")}
          alt="unchecked"
        />{props?.detail ?? "null"}</p>
      </div>
    </div>
  )
}

export default Task;
