import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    //call api get detail quiz
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    //call api get question by quizId
    let res = await getDataQuiz(quizId);
    console.log(">>> check res data quiz: ", res);

    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .filter(Boolean)
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
            console.log("item answers: ", item.answers);
          });
          console.log(">>> key ", key, "value: ", value);

          return {
            questionId: key,
            answers,
            questionDescription,
            image,
          };
        })
        .value();
      console.log(">>> check data group by questionId: ", data);
    }
  };

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title-page">
          Quiz {quizId}: {location?.state?.quizTitle}
        </div>
        <hr />
        <div className="q-body">
          <img />
          <div className="q-content">
            <div className="question"> Question 1: hOw are you doing </div>
            <div className="answer">
              <div className="a-child">A. abc </div>
              <div className="b-child">B. avb </div>
              <div className="c-child">C. asds </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <button className="btn btn-secondary">Prev</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
      <div className="right-content">count down</div>
    </div>
  );
};
export default DetailQuiz;
