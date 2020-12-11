import React from "react";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";
export const ApiContext = React.createContext();

const apiURL = "http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18";

export const ApiStorage = ({ children }) => {
  const [dataApi, setDataApi] = React.useState(null);
  const [load, setLoad] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      Cookies.removeItem("user");
      setLogin(false);
      navigate("/");
    },
    [navigate]
  );

  async function userLogin() {
    Cookies.setItem("user", "loginTrue");
    setLogin(true);
  }

  const readCookies = () => {
    const user = Cookies.getItem("user");
    if (user) {
      setLogin(true);
    }
  };

  React.useEffect(() => {
    async function callApi() {
      const api = await fetch(apiURL).then((response) => response.json());

      setDataApi(api.results.data);
      setLoad(true);
      // console.log("state ", api.results.data);
    }
    callApi();
    readCookies();
  }, []);

  return (
    <>
      {load && (
        <ApiContext.Provider
          value={{ dataApi, userLogin, userLogout, load, login }}
        >
          {children}
        </ApiContext.Provider>
      )}
    </>
  );
};
