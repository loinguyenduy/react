import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss"
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";


const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);  

  return (
    <div className="manage-user-container">
      <div className="title">Manage Users</div>

      <div className="users-content">
        <div className="btn-add-new"></div>
        <div>
          <button className="btn btn-primary"
          onClick={() => setShowModalCreateUser(true)}
          > <FaPlusCircle/> 
          Add new users</button>
        </div>
        <div className="table-users-container">Table users</div>
        <ModalCreateUser 
        show={showModalCreateUser}
        setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
};
export default ManageUser;
