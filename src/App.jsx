import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Draggable, Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import "leaflet/dist/leaflet.css";
import './App.css'

function App() {

    const markers = [
        {
            geocode: [48.86, 2.3522],
            popUp: "Paris 1",
            image: <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/59/86/caption.jpg?w=1400&h=1400&s=1' className="image-map" />,
        },
        {
            geocode: [48.85, 2.3522],
            popUp: "Paris 2",
            image: <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/59/86/caption.jpg?w=1400&h=1400&s=1' className="image-map" />
        },
        {
            geocode: [48.855, 2.34],
            popUp: "Paris 3",
            image: <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/59/86/caption.jpg?w=1400&h=1400&s=1' className="image-map" />
        }
    ];

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/9131/9131546.png",
        iconSize: [38, 38]
    })

    const createCustomClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
            className: "custom-marker-cluster",
            iconSize: point(33, 33, true)
        })
    }

    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* <TileLayer
                attribution="Stadia.OSMBright"
                url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
            /> */}

            <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}>
                {markers.map(marker => (
                    <Marker position={marker.geocode} icon={customIcon}>
                        <Popup>
                            {marker.popUp}
                            {marker.image}
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
            <div className="search-location">
                <input type="text" placeholder="Digite aqui seu endereço" />
                <div className="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#000000c6" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
                </div>
            </div>
        </MapContainer>
    )
}

export default App
