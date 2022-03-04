export default function Main({item}) {
    return (
        <main>
            <img src={require(`../${item.coverImg}`)} alt="" />
            <div className="main--details">
                <div className="main--location">
                    <img className = "main--location-marker" src={require("../images/location-marker.png")} alt="" />
                    <p>{item.location}</p>
                    <a href={item.googleMap}>View on Google Maps</a>
                </div>
                <h1 className = "main--title">{item.title}</h1>
                <p className="main--date">{item.startAndEndDate}</p>
                <p className="main--description">{item.description}</p>

            </div>
        </main>
    )
}