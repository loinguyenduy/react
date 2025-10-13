import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import HomePage from "./components/Home/HomePage";
import ManageUser from "./components/Admin/Content/ManageUser";
import Dashboard from "./components/Admin/Content/Dashboard";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        {/* App is parent component and layout component for all child component */}
        <Route path="/" element={<App />}>
          {/* Child component always render parent component (App).
              Then it finds Outlet inside App to insert content of child component. */}

          {/* Index route is used to define the default child route. 
                  Because it is same route "/" with component App, so we use it to render HomePage by default. */}
          <Route index element={<HomePage />} />
          <Route path="/users" element={<User />} />
        </Route>

        <Route path="admins" element={<Admin />}>
          <Route path="manage-users" element={<ManageUser />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>

    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
