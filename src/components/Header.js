// importing the logo image

import travelLogo from "../images/travel-logo.png"

/* composing and exporting the Header component. 
Small and unnecessary for it to be a component of its own. Done for practice */

export default function Header() {
    return (
        <header>
            <img className="header--logo" src={travelLogo} alt=""/>
            <h3 className="header--title">my travel journal.</h3>
        </header>
    )
}