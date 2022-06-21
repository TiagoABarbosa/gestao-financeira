import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import LoginPage from "../pages/Login/signin";
import Register from "../pages/Register/signup";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <LoginPage />;
};

const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Private Item={Home} />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route exact path="/Register" element={<Register />} />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    );
  };
  
  export default RoutesApp;

