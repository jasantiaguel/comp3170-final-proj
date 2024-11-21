import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useState } from "react";

const ExpandingMap = ({center=[49.250458089117636, -123.00526868536116], setCoords}) => {
  function MapGetCoords() {
    const map = useMapEvent("click", (e) => {
      setCoords(e.latlng);
    })
  }

  return(
    <div className="map">
      <MapContainer center={center} zoom={4} scrollWheelZoom={false} style={{width: "100%", height: "100%"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapGetCoords/>
      </MapContainer>
    </div>
  )
}

export default ExpandingMap;