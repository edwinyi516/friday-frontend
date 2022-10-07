import React, { Component } from 'react'
import TasksList from '../UsersTasks/TasksList';
import TaskDetails from '../UsersTasks/TaskDetails';
import "./index.css"

let baseURL = "";
if (process.env.REACT_APP_ENVIRONMENT === "production") {
  baseURL = "https://friday-project-mgmt-backend.herokuapp.com";
} else {
  baseURL = "http://localhost:3003";
}
// let baseURL = process.env.REACT_APP_BACKEND_URL

export default class UsersTasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
    }
    componentDidMount() {
        this.getUsersTasks()
    }

    getUsersTasks = () => {
        fetch(baseURL + `/tasks/user/${this.props.user._id}`)
            .then(res => {
                if(res.status === 200) {
                    return res.json()
                }
                else {
                    return []
                }
            }).then(data => {
                this.setState({ tasks: data })
            })
    }

    handleClick = (taskId) => {
        const selectedTask = this.state.tasks.find((task) => task._id === taskId);
        this.setState({ task: selectedTask });
        console.log(selectedTask)
      };

    render() {
        return (
            <>
                <div className="dashboardContainer">
                    <div className="tasksList">
                        <TasksList tasksArray={this.state.tasks} handleClick={this.handleClick} />
                    </div>
                    <div className='detailsBox'>
                        <TaskDetails {...this.state.task} />
                    </div>
                </div>

                {/* <h3> Tasks</h3>
                <ul>
                    {
                        this.state.Tasks.map((task, i) => (
                            <li key={i}>{task.taskName}</li>
                        ))
                    }
                </ul> */}
            </>
        )
    }
}