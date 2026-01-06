import { useState, useEffect } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import { postCreateNewQuiz } from "../../../../services/apiServices";
import { toast } from "react-toastify";
import TableQuiz from "./TableQuiz";
import Accordion from "react-bootstrap/Accordion";
import ModalEditQuiz from "./ModalEditQuiz";
import { getAllQuizForAdmin } from "../../../../services/apiServices";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import QuizQA from "./QuizQA";
import AssignQuiz from "./AssignQuiz";

const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ManageQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  const [showModalEditQuiz, setShowModalEditQuiz] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
  const [dataDelete, setDataDelete] = useState({});

  const handleChangeFile = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
  };

  const handleSubmitQuiz = async () => {
    //validate
    if (!name || !description) {
      toast.error("Name/Description is required!");
      return;
    }
    let res = await postCreateNewQuiz(name, description, type?.value, image);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
      setImage(null);
      await fetchQuiz();
    } else {
      toast.error(res.EM);
    }
  };

  const handleClickBtnEdit = (quiz) => {
    setShowModalEditQuiz(true);
    setDataUpdate(quiz);
  };

  const resetUpdateData = () => {
    setDataUpdate({});
  };

  const handleClickBtnDeleteQuiz = (quiz) => {
    setShowModalDeleteQuiz(true);
    setDataDelete(quiz);
  };

  return (
    <div className="quiz-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Manage Quizzes</Accordion.Header>
          <Accordion.Body>
            <div className="add-new">
              <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new Quiz</legend>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <label for="floatingPassword">Description</label>
                </div>
                <div className="my-3">
                  <Select
                    value={type}
                    // onChange={this.handleChange}
                    defaultValue={type}
                    onChange={setType}
                    options={options}
                    placeholder={"Quiz type...."}
                  />
                </div>
                <div className="more-actions form-group">
                  <label className="mb-1"> Upload Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(event) => handleChangeFile(event)}
                  />
                </div>
                <div className="mt-3">
                  <button
                    onClick={() => handleSubmitQuiz()}
                    className="btn btn-warning"
                  >
                    Save
                  </button>
                </div>
              </fieldset>
            </div>
            <div className="list-detail">
              <TableQuiz
                handleClickBtnEdit={handleClickBtnEdit}
                listQuiz={listQuiz}
                fetchQuiz={fetchQuiz}
                handleClickBtnDeleteQuiz={handleClickBtnDeleteQuiz}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Update Q/A Quizzes</Accordion.Header>
          <Accordion.Body>
            <QuizQA/>
          </Accordion.Body>
        </Accordion.Item>

              <Accordion.Item eventKey="3">
          <Accordion.Header>Assign to Users</Accordion.Header>
          <Accordion.Body>
            <AssignQuiz/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <ModalEditQuiz
        show={showModalEditQuiz}
        setShow={setShowModalEditQuiz}
        dataUpdate={dataUpdate}
        resetUpdateData={resetUpdateData}
        fetchQuiz={fetchQuiz}
      />

      <ModalDeleteQuiz
        show={showModalDeleteQuiz}
        setShow={setShowModalDeleteQuiz}
        dataDelete={dataDelete}
        fetchQuiz={fetchQuiz}
      />
    </div>
  );
};

export default ManageQuiz;
