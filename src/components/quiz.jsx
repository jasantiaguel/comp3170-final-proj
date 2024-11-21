import { useState } from "react"
import "../css/Quiz.css"
import { useNavigate } from "react-router-dom";
import ExpandingMap from "./ExpandingMap";

// import goodEats1 from "/public/good-eats/1.png";
// import goodEats2 from "/public/good-eats/2.png";
// import goodEats3 from "/public/good-eats/3.png";

// import parks1 from "/public/parks/1.png";
// import parks2 from "/public/parks/2.png";
// import parks3 from "/public/parks/3.png";

// import beaches1 from "/public/beaches/1.png";
// import beaches2 from "/public/beaches/2.png";
// import beaches3 from "/public/beaches/3.png";

// const goodEats = [goodEats1, goodEats2, goodEats3];
// const parks = [parks1, parks2, parks3];
// const beaches = [beaches1, beaches2, beaches3];

export default function Quiz(props) {
    const [number, setNumber] = useState(1);
    const navigate = useNavigate();
    function handleClick() {
        if (number < 3) {
            setNumber(number + 1);
        }
        else {
            navigate("/results");
        }
    }

    const [coords, setCoords] = useState({});
    const targetCoords = {lat: 49.250458089117636, lng: -123.00526868536116};
    const diff = getDiff(targetCoords, coords);
    const [score, setScore] = useState(0);

    function getDiff(a, b) {
        let lat = a.lat-b.lat;
        let lng = a.lng-b.lng;
        return {lat, lng};
    }

    function getScore() {
        const _lat = Math.abs(diff.lat);
        const _lng = Math.abs(diff.lng);
        if (_lat<1 && _lng<1) {
            return 10;
        }
        else if (_lat<10 && _lng<10) {
            return 5;
        }
        else if (_lat<20 && _lng<20) {
            return 1;
        }
        else return 0;
    }


    return(
        <> 
            <ExpandingMap setCoords={setCoords}/>
            <img className="mainImage" src={`/${props.category}/${number}.png`}/>
            <div style={{backgroundColor: "white", color: "black", position: "fixed", bottom: "3rem", left: "3rem"}}>
                <h3>debug window</h3>
                <p>Target: {targetCoords.lat} {targetCoords.lng}</p>
                <p>{coords.lat} {coords.lng}</p>
                <p>Diff: {diff.lat} {diff.lng}</p>
                <p>Score: {score}</p>
                <button onClick={() => setScore(0)}>Reset score</button>
            </div>
            <div style={{position: "fixed", bottom: "3rem", right: "3rem", display: "flex", gap: "1rem"}}>
                <button onClick={() => setScore(score + getScore())} className="nextButton">Confirm</button>
                <button onClick={handleClick} className="nextButton">Next</button>
            </div>

        </>
    )
}