// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  //state is object
  state = {
    name: "Loi",
    address: "Hanoi",
    age: 21,
  };

  info = {
    name: "HoidanIT",
    address: "Hanoi",
    age: 26,
  };
  //JSX: Viết code JS trong code của HTML
  render() {
    return (
      <div>
        My name is {this.state.name} and I come from {this.state.address} 
        My name is {this.info.name} and I come from {this.info.address} 
      </div>
    );
  }
}

export default MyComponent;
