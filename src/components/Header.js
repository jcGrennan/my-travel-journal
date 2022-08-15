import travelLogo from "../images/travel-logo.png"

export default function Header() {
    return (
        <header>
            <img className="header--logo" src={travelLogo} />
            <h3 className="header--title">my travel journal.</h3>
        </header>
    )
}