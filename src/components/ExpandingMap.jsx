import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css'
import { useState } from "react";

const ExpandingMap = ({center=[49.250458089117636, -123.00526868536116], setCoords}) => {
  const [marker, setMarker] = useState(center);
  
  const markerIcon = new L.Icon({
    iconUrl: "/vite.svg",

    iconSize: [50, 50],
    iconAnchor: [25, 50]
  })

  function MapGetCoords() {
    const map = useMapEvent("click", (e) => {
      setCoords(e.latlng);
      setMarker(e.latlng);
    })
  }

  return(
    <div className="map">
      <MapContainer center={center} zoom={10} scrollWheelZoom={true} style={{width: "100%", height: "100%"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapGetCoords/>
        <Marker icon={markerIcon} position={marker}/>
      </MapContainer>
    </div>
  )
}

export default ExpandingMap;