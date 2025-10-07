import "./App.scss";
import Header from "./components/Header/Header";
import { Link, Outlet } from "react-router-dom";

/*
This component is layout component for all child component (User, Admin), contains header, main, side bar.
If browse to users or admins page, it always render App component first, 
then it finds Outlet inside App to insert content of child component (User, Admin)
*/
const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container"></div>
      <div className="sidenav-container"></div>
      <div className="app-content">
        <Outlet/>
      </div>
    </div>
  );
};

export default App;
