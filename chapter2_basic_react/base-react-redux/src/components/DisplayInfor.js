import React from "react";

class DisplayInfor extends React.Component {

  render(){
    //props: truyền từ cha sang con
    console.log(this.props)
    //props => stand for property
    //use destructuring 
    const {name, age} = this.props
    return(
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    )
  }
}

export default DisplayInfor;