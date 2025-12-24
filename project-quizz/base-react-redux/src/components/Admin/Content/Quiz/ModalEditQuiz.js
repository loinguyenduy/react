import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { putEditQuiz } from "../../../../services/apiServices";
import _, { set } from "lodash"; // thư viện hỗ trợ thao tác với mảng, object

const ModalEditQuiz = (props) => {
  const { show, setShow, dataUpdate } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [quizImage, setQuizImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleClose = () => {
    setShow(false);
    setName("");
    setDescription("");
    setDifficulty("");
    setQuizImage("");
    setPreviewImage("");
    props.resetUpdateData();
  };

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setQuizImage(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      //update state
      setName(dataUpdate.name);
      setDescription(dataUpdate.description);
      setDifficulty(dataUpdate.difficulty);
      setQuizImage("");

      if (dataUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`); //hình ảnh dạng base64
      }
    }
  }, [dataUpdate]);

  const handleSubmitEditUser = async () => {
    let data = await putEditQuiz(
      dataUpdate.id,
      name,
      description,
      difficulty,
      quizImage
    );
    console.log("component response: ", data);

    if (data && data.EC === 0) {
      toast.success(data.EM); //EM: error message
      handleClose();
      await props.fetchQuiz();
    } else {
      toast.error(data.EM);
    }
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} size="xl" backdrop="static" className="modal-add-user">
        <Modal.Header closeButton>
          <Modal.Title>Update a quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Difficulty</label>
              <select
                className="form-select"
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
              >
                <option value="EASY">EASY</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="HARD">HARD</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labelUpload">
                <FaPlusCircle /> Upload File Image
              </label>
              <input
                type="file"
                id="labelUpload"
                hidden
                onChange={(event) => handleUploadImage(event)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} alt="Preview" />
              ) : (
                <span>Preview Image</span>
              )}
              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUxm-2Z1WOV-BAwf3gSUCEZV6x1HQSIUl2w&s" /> */}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>Close</Button>
          <Button variant="primary" onClick={() => handleSubmitEditUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditQuiz;
