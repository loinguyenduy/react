import React from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log("call constructor: 0")
    super(props)
    //babel bompiler
    this.state = {
      isShowListUser: true
    }
  }

  componentDidMount() {
    console.log("call component did mount")
    setTimeout(() => {
      document.title = 'React Lifecycle '
    }, 3000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("call component did update", this.props, prevProps) //prevProps: xem lại quá khứ trước khi thay đổi của props
    if(this.props.listUsers !== prevProps.listUsers){
      if(this.props.listUsers.length == 5){
        alert('You got 5 users!')
      }
    }

  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser //toggle: Toán tử ! sẽ trả ra giá trị phủ định của biến dùng để show/hide
    })
  };
  render() {
    console.log("call render")
    //props: truyền từ cha sang con
    // console.log(this.props);
    //props => stand for property
    //use destructuring
    const { listUsers } = this.props;
    // console.log(listUsers);
    return (
      
      <div className='display-infor-container'>
        {/* <img src={logo}/>  */}
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
                    <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
  }
}

export default DisplayInfor;
