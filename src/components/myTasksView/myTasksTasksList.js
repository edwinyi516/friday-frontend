import React from "react";
import MyTasksTaskItem from "./myTasksTaskItem";
import "./myTasksTasksList.css";

function MyTasksTasksList(props) {
  // console.log(props);

  return (
    <div className="tasksList container" id="projectContainer">
      <h2>Tasks:</h2>
      <ul>
        {props.tasksArray.map((task) => {
          return (
            <li
              key={task._id}
              onClick={() => {
                props.handleClick(task._id);
              }}
            >
              <MyTasksTaskItem {...task} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MyTasksTasksList;
