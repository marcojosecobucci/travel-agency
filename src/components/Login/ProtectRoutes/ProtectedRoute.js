import React from "react";

import { Navigate, Route } from "react-router-dom";
import { ApiContext } from "../../../ApiContext";

const ProtectedRouteTest = (props) => {
  const { login } = React.useContext(ApiContext);

  if (login === true) return <Route {...props} />;
  else if (login === false) return <Navigate to="/" />;
  else return null;
};

export default ProtectedRouteTest;
