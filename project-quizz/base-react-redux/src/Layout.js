import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import HomePage from "./components/Home/HomePage";
import ManageUser from "./components/Admin/Content/ManageUser";
import Dashboard from "./components/Admin/Content/Dashboard";
import Login from "./components/Auth/Login";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Auth/Register";
import ListQuiz from "./components/User/ListQuiz";

const Layout = (props) => {
  return (
    <>
      <Routes>
        {/* App is parent component and layout component for all child component */}
        <Route path="/" element={<App />}>
          {/* Child component always render parent component (App).
              Then it finds Outlet inside App to insert content of child component. */}

          {/* Index route is used to define the default child route. 
                  Because it is same route "/" with component App, so we use it to render HomePage by default. */}
          <Route index element={<HomePage />} />
          <Route path="/users" element={<ListQuiz />} />
        </Route>

        <Route path="admins" element={<Admin />}>
          <Route path="manage-users" element={<ManageUser />} />
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default Layout;
