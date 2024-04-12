import React from 'react';
import './designWeekly.css';
import './task.css'

const DesignWeekly = () => {
  return (
    <section className='design-container' >
      <h2 className='page-heading'>Design weekly</h2>
      <p style={{margin:"0.5vh 0"}}>A board to keep track of design progress.</p>
      <div className="design-content">
        <div className="week">
          <p className="topic">
            Last week
          </p>
          <div className="task-container">
            <p className='subtitle'>Review scope</p>
            <p>Review #390.</p>
            <p className="pink">Due 4/11</p>
          </div>
          <div className="task-container">
            <p className='subtitle'>Team retro</p>
            <p className='cancel'><img src={require("../assets/images/Unchecked.png")} alt="unchecked" /> Schedule time</p>
            <p ><img src={require("../assets/images/Unchecked.png")} alt="unchecked" /> Set up a Figma board</p>

          </div>
        </div>
        <div className="week">
          <p className="topic">
            This week
          </p>
          <div className="task-container">
            <p><img className='' src={require("../assets/images/Avatar.png")} alt="" /><img src={require("../assets/images/Vic.png")} alt="icon" /></p>
            <p className='subtitle'>Usability test</p>
            <p>Research questions with Carina.</p>
            <p className="green">Research</p>
          </div>
        </div>
        <div className="week">
          <p className="topic next">
            Next week
          </p>
          <div className="task-container">
            <p><img className='' src={require("../assets/images/Vic.png")} alt="" /></p>
            <p className='subtitle'>Culture workshop</p>
            <p>Let’s build a great team.</p>
            <p className='cancel'><img src={require("../assets/images/Checked.png")} alt="checked" /> Schedule time</p>
            <p className=""><img src={require("../assets/images/Unchecked.png")} alt="unchecked" /> Set up a Figma board</p>
            <p className=""><img src={require("../assets/images/Unchecked.png")} alt="unchecked" />Review exercises with the team</p>
            <p className="pink"> Due 24/11</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignWeekly;
