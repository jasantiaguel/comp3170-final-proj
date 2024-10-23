import { useState } from "react"
import "../css/Quiz.css"
import { useNavigate } from "react-router-dom";

const ExpandingMap = () => {
    return(
        <div className="map"/>
    )
}

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
    
    return(
        <>
            <ExpandingMap/>
            <img className="mainImage" src={`/public/${props.category}/${number}.png`}/>
            <button onClick={handleClick} className="nextButton">Next</button>
        </>
    )
}