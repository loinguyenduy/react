import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
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
