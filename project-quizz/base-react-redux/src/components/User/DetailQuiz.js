import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;

  useEffect(() => {
    //call api get detail quiz
    fetchQuestions();
  }, [quizId])

  const fetchQuestions = async() => {
    //call api get question by quizId
    let res = await getDataQuiz(quizId);
    console.log(">>> check res data quiz: ", res);
  }

  return (
    <div className="detail-quiz-container">detail quiz component</div>
  )
}
export default DetailQuiz;