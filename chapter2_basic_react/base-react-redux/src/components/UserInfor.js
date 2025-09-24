import React from "react";

class UserInfor extends React.Component {
    //state is object
  state = {
    name: "Loi",
    address: "Hanoi",
    age: 21,
  };

  //handle event
  handleClick = (event) => {
    // console.log("Clicked me!")
    console.log("My name is: ", this.state.name);
    console.log("My age is: ", this.state.age);

    //setState() to change state of object
    this.setState({
      name: "Eric",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMouseOver(event) {
    console.log(event);
  }

  //Video 21
  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

    handleOnChangeAge = (event) => {
      //bad code
      //this.state.age = event.target.value
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); //prevent reload page when submitting
    console.log(this.state);
  };
  
  render(){
    return (
      <div>
        My name is {this.state.name} and I am {this.state.age}
        <br></br>
        <button onMouseOver={this.handleOnMouseOver}>Click over me</button>
        <br></br>
        <button onClick={this.handleClick}>Click me</button>
        {/* 
            onMouseOver: handle event that hover over button
            onClick: handle event that click to button
            onSubmit: handle event when user click submit or enter
            onChange: handle event user enter input
            preventDefault(): prevent reloading page */}

        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            // fill name of state automatically
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          ></input> <br></br>

          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          ></input>

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default UserInfor;