import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

//stateless vs stateful
// class DisplayInfor extends React.Component {

//   render() {
//     console.log("call render")
//     //props: truyền từ cha sang con
//     // console.log(this.props);
//     //props => stand for property
//     //use destructuring
//     const { listUsers } = this.props;
//     // console.log(listUsers);
//     return (

//       <div className='display-infor-container'>
//         {/* <img src={logo}/>  */}

//         {true && (
//           <>
//             {/* Dùng map để lặp các phần tử trong object state, sẽ in ra 3 phần tử có trong object */}
//             {listUsers.map((user, index) => {
//               // console.log("Check map user:", user);

//               return (
//                 // + để parse nhanh từ string to number
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name is {user.name} </div>
//                   <div>My age is {user.age} </div>
//                   <div>
//                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );

//     {
//       /* <div>My name is {name}</div>
//         <div>My age is {age}</div> <hr/>

//         <div>My age is {age}</div>
//         <div>My age is {age}</div> <hr/>

//         <div>My age is {age}</div>
//         <div>My age is {age}</div>  */
//     }
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  }
  
  console.log("call me render")

  useEffect(() => {
    if(listUsers.length === 0){
      alert('List user is empty...')
    }
    console.log("call me effect")
  }, [listUsers] // cần truyền tham số để effect chỉ chạy 1 lần
)
  return (
    <div className="display-infor-container">

      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list users" : "Show list users"}
        </span>
      </div>

      {isShowHideListUser && (
        <>
          {/* Dùng map để lặp các phần tử trong object state, sẽ in ra 3 phần tử có trong object */}
          {listUsers.map((user, index) => {
            // console.log("Check map user:", user);

            return (
              // + để parse nhanh từ string to number
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name} </div>
                <div>My age is {user.age} </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );

  {
    /* <div>My name is {name}</div>
        <div>My age is {age}</div> <hr/>

        <div>My age is {age}</div> 
        <div>My age is {age}</div> <hr/>

        <div>My age is {age}</div> 
        <div>My age is {age}</div>  */
  }
};

export default DisplayInfor;
