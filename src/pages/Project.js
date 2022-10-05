import React, { useEffect, useState } from "react";
import LowerContent from "../components/Project/LowerContent";
import UpperContent from "../components/Project/UpperContent";
import "./Project.css";
import { useParams } from "react-router-dom";

//class Components cannot access route params anymore with react Router***

//will be using functional component so that I can use the 'useParams() Hook' (these kind of hooks only work with functional components)
//useParams() allowes me to access the route/url parameter such as :id
//to then make a fetch request to Projects/:id
function Project(props) {
  //first element: madeup Name for the state
  //second element: madeup Name for the function that will update the state
  //useState() is not madeup, it is a HOOK that we use to create and update our state
  //we pass the value of NULL as a default value so it isnt empty (just to be explicit about the starting state), but it works without as well.
  const [projectState, updateStateFunction] = useState(null); //useState needs to be imported

  // console.log(props);
  const routeParams = useParams();
  //useParams() is a React Hook method that allowes me to grab the id or whatever parameter is in the URL
  // console.log(routeParams);
  // console.log(useParams().id);

  //I dont think functional components have access to componentDidMount() so Im gonna use another hook ---> useEffect()
  //you have to import useEffect() if you're gonna use it***
  //first parameter has to be a callback function, second parameter an empty array for our case

  useEffect(() => {
    fetch(`${props.baseURL}/projects/${routeParams.id}`).then((res) => {
      res.json().then((data) => updateStateFunction(data));
    });
  }, [routeParams.id]);

  return (
    <div className="projectDetailsContainer">
      {/* below we're passing down the state as props */}
      <UpperContent {...projectState} />
      {projectState !== null ? (
        <LowerContent {...projectState} baseURL={props.baseURL} />
      ) : null}
    </div>
  );
}

export default Project;
