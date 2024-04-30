import React from 'react';
import './task.css';

interface TaskProps {
  id: number;
  subtitle: string;
  detail: string;
  onDelete: (id: number) => void;
}

const Task = ({ id, subtitle, detail, onDelete }: TaskProps) => {


  return (
    <div key={id} className='task-container ' >
      <p className='subtitle'>
        {subtitle ?? "null"}
        <button className='dlt-btn' onClick={() => onDelete(id)}>X</button>
      </p>
      <div className='task-ul'>
        <p className='task-li'> <img
          src={require("../assets/images/Unchecked.png")}
          alt="unchecked"
        />{detail ?? "null"}  </p>
      </div>

    </div>
  )
}

export default Task;
