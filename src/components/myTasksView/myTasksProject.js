import React from "react";

import MyTasksLowerContent from "./myTasksLowerContent";

//class Components cannot access route params anymore with react Router***

//will be using functional component so that I can use the 'useParams() Hook' (these kind of hooks only work with functional components)
//useParams() allowes me to access the route/url parameter such as :id
//to then make a fetch request to Projects/:id
function MyTasksProject(props) {
  //   const routeParams = useParams();

  //   useEffect(() => {
  //     fetch(`${props.baseURL}/projects/${routeParams.id}`).then((res) => {
  //       res.json().then((data) => updateStateFunction(data));
  //     });
  //   }, [routeParams.id]);

  return (
    <div className="myTasksContainer">
      {props.userData !== null ? (
        <MyTasksLowerContent
          userData={props.userData}
          baseURL={props.baseURL}
        />
      ) : null}
    </div>
  );
}

export default MyTasksProject;
