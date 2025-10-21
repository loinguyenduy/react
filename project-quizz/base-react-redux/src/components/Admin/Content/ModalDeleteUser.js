import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiServices';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
  const {show, setShow, dataDelete} = props;

  const handleClose = () => setShow(false);

  const handleSubmitDeleteUser = async () => {
    let data = await deleteUser(dataDelete.id);
    if (data && data.EC === 0) {
      //EC: error code
      toast.success(data.EM); //EM: error message
      handleClose();
      await props.fetchListUsers();
    } else {
      toast.error(data.EM);
    }

    handleClose();
  }
  return (
    <>

      <Modal show={show} onHide={handleClose}
      backdrop="static"
    
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete this User?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user? 
          Email: <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitDeleteUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;