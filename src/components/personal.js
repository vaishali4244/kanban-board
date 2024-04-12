import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/reducer/userReducer";
import "./designWeekly.css";
import Task from "./task";


const Personal = () => {
  const data = useSelector(state => state?.user?.data)
  const dispatch = useDispatch();
  const [addTitle, setAddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [searchQuery, setSearchQuery] = useState("");


  //function to add items in the present list
  const addItemFunc = (addTitle, addDescription) => {
    dispatch(setData([
      {
        subtitle: addTitle,
        detail: addDescription,
      }
    ]))
  };

  // //function to add new items and clear the input fields
  const handleAddItem = () => {
    if (addTitle.trim() !== "" && addDescription.trim() !== "") {
      addItemFunc(addTitle, addDescription);
      setAddTitle("");
      setAddDescription("");
    }
  };

  //function to show matched label
  const filteredData = data?.filter((item) =>
    item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="design-container">
      <h2 className="page-heading">Personal</h2>
      <p style={{ margin: "0.6vh 0" }}>
        A board to keep track of personal tasks.
      </p>
      <div className="design-content">
        <div className="week">
          <p className="topic next" style={{ background: "#E1E4E8" }}>
            Not started
          </p>
          <div className="search-bar">

            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="submit-btn" onClick={() => setSearchQuery("")}>Clear</button>
          </div>
          <div className="task-container">
            <p className="subtitle">Take Coco to a vet</p>
            <p className="pink">Due 4/11</p>
          </div>

          {filteredData?.map((item, id) => {
            return (
              <Task key={id} id={id} subtitle={item?.subtitle} detail={item?.detail} />
            );
          })}

          {/* {data?.map((item, id) => {
            return (
              <Task
                id={id}
                subtitle={item?.subtitle}
                detail={item?.detail}
              />
            );
          })} */}

          <div className="task-container">
            <h4>Add Task</h4>
            <input className="addtask"
              type="text"
              placeholder="title"
              onChange={(e) => setAddTitle(e?.target?.value)}
              value={addTitle}
            />
            <textarea placeholder="details"
              onChange={(e) => setAddDescription(e?.target?.value)}
              value={addDescription}

            />
            <button className="submit-btn" onClick={handleAddItem}>Submit</button>
          </div>
        </div>

        <div className="week">
          <p className="topic">In progress</p>
          <div className="task-container">
            <p className="subtitle">Taxes 😔</p>
            <p className="">
              <img
                src={require("../assets/images/Unchecked.png")}
                alt="unchecked"
              />{" "}
              Accountant contract
            </p>
            <p className="">
              <img
                src={require("../assets/images/Unchecked.png")}
                alt="unchecked"
              />
              Request work payslips
            </p>
            <p>
              <img
                src={require("../assets/images/Unchecked.png")}
                alt="unchecked"
              />
              Cancel VAT ID
            </p>
            <p className="green">Research</p>
          </div>
        </div>
        <div className="week">
          <p className="topic next">Blocked</p>
          <div className="task-container">
            <p>
              <img src={require("../assets/images/Vic.png")} alt="icon" />
            </p>
            <p className="subtitle">Move</p>
            <p>Survive moving places in the pandemic.</p>
            <p>
              <img
                src={require("../assets/images/Unchecked.png")}
                alt="unchecked"
              />
              Request moving estimate
            </p>
            <p className="cancel">
              <img
                src={require("../assets/images/Checked.png")}
                alt="checked"
              />
              Order moving boxes
            </p>
          </div>
        </div>
        <div className="week">
          <p className="topic next" style={{ background: "#CBDFD8" }}>
            Done
          </p>
          <div className="task-container">
            <p className="subtitle">Nothing to be done 🙃</p>
          </div>

          <img
            className="task-img"
            src={require("../assets/images/image.png")}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Personal;
