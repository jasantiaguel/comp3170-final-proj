import { MapContainer, Marker, TileLayer, useMapEvent, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { useState, useRef } from "react";
import axios from 'axios';
import "../css/Quiz.css";

const ExpandingMap = ({ center = [49.250458089117636, -123.00526868536116], setCoords }) => {
  const [marker, setMarker] = useState(center);
  const [popupContent, setPopupContent] = useState("");
  const markerRef = useRef(null);

  const markerIcon = new L.Icon({
    iconUrl: "/map-marker.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 50]
  });

  const reverseGeocode = async (lat, lng) => {
    const apiKey = 'cc4071ffe6264d879c66c4e106d0c26d'; // Your OpenCage API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;
    try {
      const response = await axios.get(url);
      const address = response.data.results[0].formatted;
      setPopupContent(address);
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setPopupContent(`Lat: ${lat}, Lng: ${lng}`);
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }
  };

  function MapGetCoords() {
    useMapEvent("click", (e) => {
      setCoords(e.latlng);
      setMarker(e.latlng);
      reverseGeocode(e.latlng.lat, e.latlng.lng);
    });
    return null;
  }

  return (
    <div className="map">
      <MapContainer center={center} zoom={10} scrollWheelZoom={true} className="mapContent" style={{ width: "225%", height: "175%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapGetCoords />
        <Marker icon={markerIcon} position={marker} ref={markerRef}>
          <Popup offset={[0, -45]}>{popupContent}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ExpandingMap;