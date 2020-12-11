import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Cookies from "js-cookies";

import AuthApi from "./AuthApi";
function App() {
  const [auth, setAuth] = React.useState(false);
  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  };

  React.useEffect(() => {
    readCookies();
  }, []);

  return (
    <div>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
  );
}

//login
const Login = () => {
  const Auth = React.useContext(AuthApi);

  const handleOnClick = () => {
    Auth.setAuth(true);
    Cookies.set("user", "loginTrue");
  };

  return (
    <div>
      <h1>welcome to coding</h1>
      <button onClick={handleOnClick}>Login</button>
    </div>
  );
};

const DashBoard = () => {
  const Auth = React.useContext(AuthApi);
  const handleOnClick = () => {
    Auth.setAuth(false);
    Cookies.remove("user");
  };

  return (
    <div>
      <h1> dashboard </h1>
      <button onClick={handleOnClick}>logout</button>
    </div>
  );
};

const Routes = () => {
  const Auth = React.useContext(AuthApi);
  return (
    <Switch>
      <ProtectedLogin path="/login" component={Login} auth={Auth.auth} />
      <ProtectedRoute
        path="/Dashboard"
        auth={Auth.auth}
        component={Dashboard}
      />
    </Switch>
  );
};

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Redirect to="/dashboard" />)}
    />
  );
};

// // AuthApi.js

// import React from "react"
// const AuthApi = React.createContext();
// export default AuthApi;
