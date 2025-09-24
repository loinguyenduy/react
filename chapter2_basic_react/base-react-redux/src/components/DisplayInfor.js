import React from "react";

class DisplayInfor extends React.Component {

  render(){
    //props: truyền từ cha sang con
    console.log(this.props)
    //props => stand for property
    //use destructuring 
    const {listUsers} = this.props
    console.log(listUsers)
    return(
      <div>
        {/* Dùng map để lặp các phần tử trong object state, sẽ in ra 3 phần tử có trong object */}
        {listUsers.map((user, index) => {
          // console.log(user)
          return (
            // cần 1 thuộc tính key (qua id) để định danh thẻ div
            <div key={user.id}>
              <div>My name is {user.name}  </div>
              <div>My age is {user.age} </div>
              <hr/>
              </div>
          )
        })}

        {/* <div>My name is {name}</div>
        <div>My age is {age}</div> <hr/>

        <div>My age is {age}</div> 
        <div>My age is {age}</div> <hr/>

        <div>My age is {age}</div> 
        <div>My age is {age}</div>  */}
      </div>
    )
  }
}

export default DisplayInfor;