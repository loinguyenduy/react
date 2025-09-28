import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser //toggle: 
    })
  };
  render() {
    //props: truyền từ cha sang con
    console.log(this.props);
    //props => stand for property
    //use destructuring
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true ? "Hide list users:" : "Show list users:"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {/* Dùng map để lặp các phần tử trong object state, sẽ in ra 3 phần tử có trong object */}
            {listUsers.map((user, index) => {
              console.log("Check map user:", user);

              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name} </div>
                  <div>My age is {user.age} </div>
                  <hr />
                </div>
              );
            })}
          </div>
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
  }
}

export default DisplayInfor;
