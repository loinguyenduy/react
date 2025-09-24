// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Hoi dan IT", age: "30" },
      { id: 2, name: "Duy Loi", age: "21" },
      { id: 3, name: "Harry Pham Dev", age: "26" },
    ],
  };

  //JSX: Viết code JS trong code của HTML
  render() {
    //Video 24

    return (
      <div>
        <UserInfor /> <br></br>
        <DisplayInfor listUsers={this.state.listUser}/>
      </div>
    );
  }
}

export default MyComponent;
