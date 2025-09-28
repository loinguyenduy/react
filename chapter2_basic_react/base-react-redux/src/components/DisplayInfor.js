import React from "react";
import './DisplayInfor.scss'

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser //toggle: Toán tử ! sẽ trả ra giá trị phủ định của biến dùng để show/hide
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
      <div className='display-infor-container'>
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
                // + để parse nhanh từ string to number
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
