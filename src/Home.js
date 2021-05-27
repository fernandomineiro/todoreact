
import React, { Component,  useContext, useState } from 'react';
import ReactDOM from 'react-dom';
const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Adhithi Ravichandran"
  },
  GraphQL: {
    post: "Learn GraphQL Mutations",
    author: "Adhithi Ravichandran"
  }
};
const blogInfoContext = React.createContext(blogInfo);

function BlogDetailComponent() {
  const blogDetails = useContext(blogInfoContext);

  return (
    <div>
      <h3>React Blog Details</h3>
      <p>Topic: {blogDetails.React.post}</p>
      <p>Author: {blogDetails.React.author}</p>
    </div>
  );
}

const YesNoComponentFunctional = () => {
  const [button, setButton] = useState("");

  const onYesPress = () => {
    setButton("Yes");
    console.log({ button });
  };

  const onNoPress = () => {
    setButton("No");
    console.log({ button });
  };

  return (
    <div>
      <button onClick={() => onYesPress()}>Yes</button>
      <button onClick={() => onNoPress()}>No</button>
     </div>
  );
};


class Home extends Component{

  render(){
    return (
      <div>
     <BlogDetailComponent />
     <YesNoComponentFunctional /> 
     </div>
    );
  }
}
export default Home;
