import React from "react";
import logo from "../../img/logo.svg";
import Btn from "../Button/Btn";
import { TextPres } from "./HeaderStyles";
import { ApiContext } from "../../ApiContext";
import NavBar from "./NavBar";

const Header = () => {
  const { dataApi } = React.useContext(ApiContext);

  return (
    <div style={{ padding: 0 }}>
      <div className="bckImg">
        <div className="overbgImg">
          <NavBar logo={logo} />
          <TextPres>
            <h1>
              Per {dataApi.customerName} <br />
              {dataApi.title}
            </h1>
            <Btn title="SCOPRI DI PIU'" />
          </TextPres>
        </div>
      </div>
    </div>
  );
};

export default Header;
