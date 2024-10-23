import { useState } from "react"
import "../css/Quiz.css"
import { useNavigate } from "react-router-dom";

import img1 from "/public/good-eats/1.png";
import img2 from "/public/good-eats/2.png";
import img3 from "/public/good-eats/3.png";

const images = [img1, img2, img3];

const ExpandingMap = () => {
    return(
        <div className="map"/>
    )
}

export default function Quiz(props) {
    const [number, setNumber] = useState(0);
    const navigate = useNavigate();
    function handleClick() {
        if (number < 2) {
            setNumber(number + 1);
        }
        else {
            navigate("/results");
        }
    }
    
    return(
        <>
            <ExpandingMap/>
            <img className="mainImage" src={images[number]}/>
            <button onClick={handleClick} className="nextButton">Next</button>
        </>
    )
}