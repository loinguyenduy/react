import videoHomepage from "../../assets/video-homepage.mp4";
import {useSelector} from "react-redux";

const HomePage = (props) => {
  const account = useSelector(state => state.user.account);
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  console.log(">>> check account: ", account);
  console.log(">>> check isAuthenticated: ", isAuthenticated);
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
          <button>Get Started. It's Free</button>
        </div>

      </div>
  );
};
export default HomePage;
