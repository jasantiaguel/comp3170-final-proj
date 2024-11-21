import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useState } from "react";

const ExpandingMap = ({center=[49.250458089117636, -123.00526868536116], setCoords}) => {
  const [marker, setMarker] = useState(center);
  
  function MapGetCoords() {
    const map = useMapEvent("click", (e) => {
      setCoords(e.latlng);
      setMarker(e.latlng);
    })
  }

  return(
    <div className="map">
      <MapContainer center={center} zoom={4} scrollWheelZoom={true} style={{width: "100%", height: "100%"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapGetCoords/>
        <Marker position={marker}/>
      </MapContainer>
    </div>
  )
}

export default ExpandingMap;