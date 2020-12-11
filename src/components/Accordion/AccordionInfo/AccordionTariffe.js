import React from "react";
import { ApiContext } from "../../../ApiContext";
import AccordionInfo from "./AccordionInfo";
import "./AccordionTariffe.css"

const AccordionTariffe = () => {
  const { dataApi } = React.useContext(ApiContext);

  const included = dataApi.included.split('\n');
  const notIncluded = dataApi.notIncluded.split('\n');

  return (
    <div>
      <AccordionInfo title={"Tariffe"}>
          <hr/>
        <div className="priceResume">
          {dataApi.partecipants.map((persone, i) => (
            <div key={i} className="priceforeach">
              <div className="person">
                <small >{persone.type} </small>
              </div>
              <div className="price">
                <small >{persone.price}</small>
              </div>
            </div>
          ))}
        </div>
          <hr/>
          <div className="priceDetail">
            <div className="total">
              <p>TOTALE</p>
              <span>{(dataApi.priceTotal / 100)} €</span> 
            </div>
            <div className="inforesume">
              <h2>COSA COMPRENDE IL PREZZO</h2>
              {
                included.map((paragraph, i) => <p key={i}>{paragraph}</p>)
              }
              <h2>COSA NON COMPRENDE IL PREZZO</h2>
              {
                notIncluded.map((paragraph, i) => <p key={i}>{paragraph}</p>)
              }
            </div>
          </div>
      </AccordionInfo>
    </div>
  );
};

export default AccordionTariffe;
