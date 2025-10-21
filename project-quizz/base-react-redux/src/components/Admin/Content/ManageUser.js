import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FaPlusCircle } from "react-icons/fa";
import TableUser from "./TableUser";
import React, { useEffect, useState } from "react";
import {
  getAllUsers,
  getUserWithPaginate,
} from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({}); // Lưu dữ liệu user cần update

  const [showDetailUser, setShowDetailUser] = useState(false); // State hiển thị modal xem chi tiết user
  const [dataView, setDataView] = useState({}); // Lưu dữ liệu user cần xem chi tiết

  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false); // State hiển thị modal xóa user
  const [dataDelete, setDataDelete] = useState({}); // Lưu dữ liệu user cần xóa

  const [listUsers, setListUsers] = useState([]); // Lưu danh sách user từ API

  const LIMIT_USER = 5; // Số user hiển thị trên một trang
  const [pageCount, setPageCount] = useState(0); // Số trang tổng cộng

  useEffect(() => {
    fetchListUsersWithPaginate(1);
  }, []); // Chạy một lần khi component được mount

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res && res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const resetUpdateData = () => {
    setDataUpdate({});
  };

  const resetViewData = () => {
    setDataView({});
  };

  const handleClickBtnView = (user) => {
    setShowDetailUser(true);
    setDataView(user);
  };

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    if (res && res.EC === 0) {
      console.log(">>> check res paginate: ", res.DT);
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };

  return (
    <div className="manage-user-container">
      <div className="title">Manage Users</div>

      <div className="users-content">
        <div className="btn-add-new"></div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            {" "}
            <FaPlusCircle />
            Add new users
          </button>
        </div>
        <div className="table-users-container">
          {/* <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}
          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            pageCount={pageCount}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />

        <ModalViewUser
          show={showDetailUser}
          setShow={setShowDetailUser}
          dataView={dataView}
          resetViewData={resetViewData}
        />

        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};
export default ManageUser;
