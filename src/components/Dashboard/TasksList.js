import React from "react";
import TaskItem from "./TaskItem";
import "./TasksList.css";

function TasksList(props) {
  console.log(props);

  return (
    <div className="tasksList">
      <h2>Upcoming Tasks:</h2>
      <ul>
        {props.tasksArray.map((task) => {
          return (
            <li
              key={task._id}
              onClick={() => {
                props.handleClick(task._id);
              }}
            >
              <TaskItem {...task} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TasksList;
