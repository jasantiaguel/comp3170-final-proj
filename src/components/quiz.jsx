import { useState } from "react";
import "../css/Quiz.css";
import { useNavigate } from "react-router-dom";
import ExpandingMap from "./ExpandingMap";
import locations from "../data/locations";

export default function Quiz({category}) {
    const [number, setNumber] = useState(0);
    const currentLocation = locations[category][number];

    const navigate = useNavigate();
    function handleClick() {
        setScore(score + getScore());
        if (number < locations[category].length-1) {
            setNumber(number + 1);
        }
        else {
            navigate("/results");
        }
    }

    const [coords, setCoords] = useState({});
    const [targetCoords, setTargetCoords] = useState(currentLocation.targetCoords);
    const diff = getDiff(targetCoords, coords);
    const [score, setScore] = useState(0);

  function getDiff(a, b) {
    let lat = a.lat - b.lat;
    let lng = a.lng - b.lng;
    return { lat, lng };
  }

  function getScore() {
    const _lat = Math.abs(diff.lat);
    const _lng = Math.abs(diff.lng);
    if (_lat < 1 && _lng < 1) {
      return 10;
    } else if (_lat < 10 && _lng < 10) {
      return 5;
    } else if (_lat < 20 && _lng < 20) {
      return 1;
    } else return 0;
  }

  return (
    <>
      <ExpandingMap setCoords={setCoords} />
      <img
        className="mainImage"
        src={currentLocation.image}
        alt={currentLocation.name}
      />
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          position: "fixed",
          bottom: "3rem",
          left: "3rem",
        }}
      >
        <h3>Debug Window</h3>
        <p>Location: {currentLocation.name}</p>
        <p>Address: {currentLocation.address}</p>
        <p>
          Target: {currentLocation.targetCoords.lat},{" "}
          {currentLocation.targetCoords.lng}
        </p>
        <p>
          Picked: {coords.lat}, {coords.lng}
        </p>
        <p>
          Diff: {diff.lat}, {diff.lng}
        </p>
        <p>Score: {score}</p>
        <button onClick={() => setScore(0)}>Reset score</button>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "3rem",
          right: "3rem",
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={handleClick} className="nextButton">
          Next
        </button>
      </div>
    </>
  );
}
