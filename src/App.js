import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Project from "./pages/Project";
// import Navbar from "./components/Navbar";
// import TaskItem from "./components/Project/TaskItem";
// import React from "react";
//
import Task from './components/Tasks'
import Project from './components/Projects'
function App() {
  return(
    <>
    <h1>Project components</h1>
    <Project />
    <h1>Task components</h1>
    <Task />
    </>

  )
}
// class App extends React.Component {
//   state = {
//     projects: [],
//     users: [],
//     tasks: [],
//   };
//
//   componentDidMount() {
//     fetch("http://localhost:3003/projects").then((data) => {
//       data.json().then((projectsData) => {
//         // console.log(projectsData);
//         this.setState({ projects: projectsData });
//       });
//     });
//   }
//
//   render() {
//     // const projectList = this.state.projects.map((proj) => {
//     //   return (
//     //     <li>
//     //       <Project projectData={proj} />
//     //     </li>
//     //   );
//     // });
//     // console.log(projectList);
//
//     return (
//       <div className="app">
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/projects" />
//             <Route path="/projects/:id" element={<Project />} />
//           </Routes>
//         </main>
//       </div>
//     );
//   }
// }

export default App;
