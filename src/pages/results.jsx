import { Link, useLocation } from "react-router-dom";

export default function Results() {
    const result = useLocation().state.result;
    console.log(result);
    return(
        <div>
            <h1>Results</h1>
            <p>Your score: {result}</p>
            <Link to="/">To Home</Link>
        </div>
    )
}