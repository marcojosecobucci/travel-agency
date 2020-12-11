import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoute,
  faMapMarkedAlt,
  faClipboardList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { ApiContext } from "../../ApiContext";

const NavBar = (props) => {
  const route = <FontAwesomeIcon icon={faRoute} />;
  const marker = <FontAwesomeIcon icon={faMapMarkedAlt} />;
  const info = <FontAwesomeIcon icon={faClipboardList} />;
  const login = <FontAwesomeIcon icon={faUser} />;

  const { userLogout } = React.useContext(ApiContext);

  return (
    <div className="NavBarContainer">
      <nav className="">
        <NavLink to="/homepage" className="logo">
          <img alt="img logo" src={props.logo} />
        </NavLink>
        <NavLink to="/homepage/mappa">{marker} Mappa</NavLink>
        <NavLink to="/homepage/miotour">{route} Il mio tour</NavLink>
        <NavLink to="/homepage/infotour">{info} Info tour</NavLink>
        <button id="login" onClick={userLogout}>
          {login} Logout
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
