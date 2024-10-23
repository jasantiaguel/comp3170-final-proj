import { useState } from "react"
import "../css/Quiz.css"
import { useNavigate } from "react-router-dom";

import goodEats1 from "/public/good-eats/1.png";
import goodEats2 from "/public/good-eats/2.png";
import goodEats3 from "/public/good-eats/3.png";

import parks1 from "/public/parks/1.png";
import parks2 from "/public/parks/2.png";
import parks3 from "/public/parks/3.png";

import beaches1 from "/public/beaches/1.png";
import beaches2 from "/public/beaches/2.png";
import beaches3 from "/public/beaches/3.png";

const goodEats = [goodEats1, goodEats2, goodEats3];
const parks = [parks1, parks2, parks3];
const beaches = [beaches1, beaches2, beaches3];

const ExpandingMap = () => {
    return(
        <div className="map"/>
    )
}

export default function Quiz(props) {
    const [number, setNumber] = useState(0);

    function getImages(category) {
        if (category === "good-eats") return goodEats;
        if (category === "parks") return parks;
        if (category === "beaches") return beaches;
    }

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
            <img className="mainImage" src={getImages(props.category)[number]}/>
            <button onClick={handleClick} className="nextButton">Next</button>
        </>
    )
}