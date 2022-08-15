// importing the location icon

import locationIcon from "../images/location-icon.png"

// composing and exporting the Journal component using props to make it reusable

export default function Journal(props) {
    
    // creating a for loop to loop through the location names and capitalise each letter

    let country = props.location[0]
    for(let i = 1; i < props.location.length; i++) {
        country += props.location[i].toUpperCase()
    }
    
    return (
        <div className="locs">
            <main className="locs--main">
                <img className="locs--img" src={props.imageUrl} alt="location"/>
                <article>
                    <div className="loc">
                        <img className="loc--icon" src ={locationIcon} alt=""/>
                        <h3 className="loc--country">{country}</h3>
                        <a className="loc--link" href={props.googleMapsUrl} rel="external" target="_blank">View on Google Maps</a>
                    </div>
                    <h1 className="locs--title">{props.title}</h1>
                    <h4 className="locs--dates">{props.startDate} - {props.endDate}</h4>
                    <p className="locs--desc">{props.description}</p>
                </article>
            </main>
                    {/* using conditional rendering to prevent a <hr /> displaying after the last location */}
                    <div>{!props.last && <hr />}</div>
        </div>
    )
}
