import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <div classNameName="manage-user-container">
      <div classNameName="title">Manage Users</div>

      <div classNameName="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          Table users
          <ModalCreateUser/>
        </div>
      </div>
    </div>
  );
};
export default ManageUser;
