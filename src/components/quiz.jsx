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
        if (number < locations[category].length-1) {
            setScore(score + getScore());
            setNumber(number + 1);
        }
        else {
            navigate("/results", {state: {result: score + getScore()}});
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
    if (_lat < .01 && _lng < .01) {
      return 10;
    } else if (_lat < .02 && _lng < .02) {
      return 9;
    } else if (_lat < .03 && _lng < .03) {
      return 8;
    } else if (_lat < .04 && _lng < .04) {
      return 7;
    } else if (_lat < .05 && _lng < .05) {
      return 6;
    } else if (_lat < .06 && _lng < .06) {
      return 5;
    } else if (_lat < .07 && _lng < .07) {
      return 4;
    } else if (_lat < .08 && _lng < .08) {
      return 3;
    } else if (_lat < .09 && _lng < .09) {
      return 2;
    } else if (_lat < .1 && _lng < .1) {
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
