// class component
// function component

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUser: [
//       { id: 1, name: "Hoi dan IT", age: "16" },
//       { id: 2, name: "Duy Loi", age: "21" },
//       { id: 3, name: "Harry Pham Dev", age: "69" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     console.log(userObj);
//     this.setState({
//       listUser: [userObj, ...this.state.listUser],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let getListUsers = this.state.listUser;
//     getListUsers = getListUsers.filter((item) => item.id !== userId); //userId: id need to delete
//     this.setState({
//       listUser: getListUsers,
//     });
//   };
//   //JSX: Viết code JS trong code của HTML
//   render() {
//     //Video 24

//     return (
//       // fragment
//       <>
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} /> <br></br>
//           <DisplayInfor
//             listUsers={this.state.listUser}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = () => {
  const [listUser, setListUser] = useState([
    { id: 1, name: "Hoi dan IT", age: "16" },
    { id: 2, name: "Duy Loi", age: "21" },
    { id: 3, name: "Harry Pham Dev", age: "69" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUser([userObj, ...listUser]);
  };

  const handleDeleteUser = (userId) => {
    let getListUsers = listUser;
    getListUsers = getListUsers.filter((item) => item.id !== userId); //userId: id need to delete
    setListUser(getListUsers);
  };

  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} /> <br></br>
        <DisplayInfor
          listUsers={listUser}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
