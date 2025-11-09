import videoHomepage from "../../assets/video-homepage.mp4";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const HomePage = (props) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  console.log(">>> check isAuthenticated: ", isAuthenticated);
  const navigate = useNavigate();
  return (
    <div className="homepage-container">

      <video autoPlay loop muted>

        <source src={videoHomepage} type="video/mp4" />
      </video>

      <div className="homepage-content">
        <div className="title-one"> There's a better way to ask </div>

        <div className="title-two"> You don't want to make a boring form. 
          And you don't want to lose your users at the first step.
          Create a conversational experience instead.</div>
        </div>

        <div className="title-three"> 
          {isAuthenticated === false ? (
            <button 
            onClick={() => {
              navigate("/login");
            }}
            >Get Started. It's Free</button>
          ) : (
            <button
            onClick={() => {
              navigate("/users");
            }}
            >Doing Quiz Now...</button>
          )}
        </div>

      </div>
  );
};
export default HomePage;
