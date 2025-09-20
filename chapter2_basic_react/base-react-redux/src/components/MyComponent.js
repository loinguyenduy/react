// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  //JSX: Viết code JS trong code của HTML
  render (){
    return(
      <div>My first component
        {Math.random()}
      </div>
    );
  }
}

export default MyComponent;