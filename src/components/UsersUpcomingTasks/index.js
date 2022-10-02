import React, { Component } from 'react'

let baseURL =''
if (process.env.NODE_ENV ==='development') {
  baseURL = 'http://localhost:3003'
}
else {
  baseURL = 'https://friday-project-management.herokuapp.com/'
}

export default class UsersUpcomingTasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            upcomingTasks: []
        }
    }
    componentDidMount() {
        this.getUpcomingTasks()
    }

    getUpcomingTasks = () => {
        fetch(baseURL + '/tasks')
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

    render() {
        return (
            <>
                <ul>
                    <li>Upcoming Tasks</li>
                    {/* {this.state.tasks.filter(tasks => tasks.assigneeID === req.user.id).map(filteredTasks => (
                        <li>
                            {filteredTasks}
                        </li>
                    ))} */}
                </ul>
            </>
        )
    }
}