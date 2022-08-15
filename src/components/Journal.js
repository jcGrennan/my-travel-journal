import locationIcon from "../images/location-icon.png"

export default function Journal(props) {
    
    let country = props.location[0]
    for(let i = 1; i < props.location.length; i++) {
        country += props.location[i].toUpperCase()
    }
    
    return (
        <div className="locs">
            <main className="locs--main">
                <img className="locs--img" src={props.imageUrl} />
                <article>
                    <div className="loc">
                        <img className="loc--icon" src ={locationIcon}/>
                        <h3 className="loc--country">{country}</h3>
                        <a className="loc--link" href={props.googleMapsUrl} rel="external" target="_blank">View on Google Maps</a>
                    </div>
                    <h1 className="locs--title">{props.title}</h1>
                    <h4 className="locs--dates">{props.startDate} - {props.endDate}</h4>
                    <p className="locs--desc">{props.description}</p>
                </article>
            </main>
                    <div>{!props.last && <hr />}</div>
        </div>
    )
}
