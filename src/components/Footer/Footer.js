import React from 'react'
import './Footer.css'
import logo from '../../img/logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";


function Footer() {
    const download = <FontAwesomeIcon icon={faFileDownload} />;

    return (
        <div className="footer">
            <div>
                <p>Insolita Travels | Sicily DMC & Travel Agency (Licence nr. 2226/S2-Tur)</p>
                <p>Viale della Gioventù, 26 A -95014 Giarre (Catania)</p>
                <img src={logo} alt="logo"/>
            </div>
            <div >
                <button>{download}  Download</button>
            </div>
        </div>
    )
}

export default Footer
