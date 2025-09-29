// class component
// function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Hoi dan IT", age: "16" },
      { id: 2, name: "Duy Loi", age: "21" },
      { id: 3, name: "Harry Pham Dev", age: "69" },
    ],
  };

  handleAddNewUser = (userObj) => {
    console.log(userObj);
    this.setState({
      listUser: [userObj, ...this.state.listUser],
    });
  };
  //JSX: Viết code JS trong code của HTML
  render() {
    //Video 24

    return (
      // fragment
      <> 
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} /> <br></br>
          <DisplayInfor listUsers={this.state.listUser} />
        </div>
        <div className="b">

        </div>
      </>
    );
  }
}

export default MyComponent;
