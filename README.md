# Friday.com
Your ultimate Project Management Platform

### User story
We wanted to create an app to help teams collaborate and keep track of the project's progress while clearly defining tasks and responsibilities. The app will also allow project managers control costs and time and promote smooth collaboration between stakeholders.
* As a user, I want to create an account.
* As a user, I want to login.
* As a user, I want to logout.
* As a user, I want to create a project and collaborate with other coworkers/members.
* As a user, I want to view only tasks for me by today and upcoming dates.
* As a user, I want to view all the tasks under a particular project.
* As a user, I want to add/delete users.
### Approach taken
For the backend, we created three models to handle project details, task details and user details respectively, with each model linked to each other via either project ID or user ID. Each model has all basic RESTful routes and full CRUD.
For the front end, we used React to build out the actual pages by fetching/modifying data from the backend.
We used passport for user authentication. 
### Technology used
* express
* mongodb
* cors
* passport
* react
* bootstrap
* axios
* bcrypt
* cookie-parser
* body-parser
### Features to be added in the future
* Live chat
* Real-time collab docs
* Emoji API
* Filtering/sorting
* Permissions and project/task-specific users
### Link to the app
https://friday-project-mgmt-frontend.herokuapp.com/
### Home Page
![2022-10-06_22-55-19](https://user-images.githubusercontent.com/105821806/194458294-2c5ca792-b1d7-4bdb-83f3-e70e5bec1a4b.png)
