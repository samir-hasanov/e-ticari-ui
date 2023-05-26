import React from "react";
import Header from "./Components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES_PATH } from "./RoutesPath/routes";
import Home from "./Modules/Home";
import ErrorPage from "./Components/lib/ErrorPage";
import About from "./Modules/About";
import Contacts from "./Modules/Contacts";
import Login from "./Modules/Login";
import Adminpage from "./Modules/Adminpage";
import { useContextFunction } from "./context/ContextApi";

interface IProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const token = useContextFunction();
  console.log(token);

  return token.token ? children : <Navigate to={ROUTES_PATH.LOGIN_FORM} />;
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTES_PATH.HOME} element={<Home />} />
        <Route path={ROUTES_PATH.ABOUT} element={<About />} />
        <Route path={ROUTES_PATH.CONTACTS} element={<Contacts />} />
        <Route path={ROUTES_PATH.LOGIN_FORM} element={<Login />} />
        <Route path={ROUTES_PATH.LOGOUT} element={<Home />} />
        <Route
          path={ROUTES_PATH.ADMIN_PAGE}
          element={
            <PrivateRoute>
              <Adminpage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
