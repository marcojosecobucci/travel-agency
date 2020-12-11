import React from "react";
import {ApiContext} from "../../ApiContext";
import "./AgenteCard.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons'
import logo from '../../img/logo.svg'


const AgenteCard = () => {
  const phone = <FontAwesomeIcon icon = {faPhoneAlt}/>
  const mail = <FontAwesomeIcon icon = {faEnvelope}/>
  const address = <FontAwesomeIcon icon = {faHome}/>

  const { dataApi } = React.useContext(ApiContext);

  return ( 
    <div className="info">
      <img className="agentImg" src={dataApi.operator.image} alt="agente"/>
      <div className="operatorInfo">
        <h2>{dataApi.operator.name}</h2>
        <h5>Il tuo agente di viaggio</h5>
        <p>{phone}  <a href="tel:">{dataApi.operator.contact.phone}</a></p>
        <p>{mail} <a href="mailto:">{dataApi.operator.contact.email}</a></p>
        <p>{address} {dataApi.operator.contact.address}</p>
        
      </div>
      <hr></hr>
      <div className="companyInfo">
        <img src={logo} alt="logo"/>
        {/* Non ho trovato le info nella api e le messe statiche*/}
        <p>- Insolita Travels di InSicilia snc: Tour Operator Sicilia, DMC e Agenzia di Viaggi;</p>
        <p>- Licenza Agenzia Viaggio nr. 2226/S2-TUR della Regione Siciliana;</p>
        <p>- Polizza R.C. nr. 45130310-RC14 Europaische Reiserversicherung AG;</p>
        <p>- InSicilia snc è iscritta all'Ufficio Registro Imprese di Catania N. REA 260386;</p>
        <p>- Fondo Garanzia Viaggi: Certificato n. A/286.1059/1/R;</p>
      </div>
    </div>
  );
};

export default AgenteCard
