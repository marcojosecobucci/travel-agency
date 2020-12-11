import React from "react";
import "./AccordionInfoStyles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";

const AccordionInfo = ({ children, title, isExpand = false }) => {

  const angle = <FontAwesomeIcon icon={faAngleDoubleDown} />;

  const [expand, setExpand] = React.useState(isExpand);
  
  return (
    <div className="box">
      <div className="title-box" onClick={() => setExpand(expand => !expand)}>
        <span className="title">{title}</span>
        <span className="icon">
          <span className="icona"></span>
          <i className={`${!expand ? ' down' : ''}`}>{angle}</i>
          </span>
        <div className="clearfix"></div>
      </div>
      {expand && <div className="content">{children}</div>}
    </div>
  ) 
};

export default AccordionInfo;
