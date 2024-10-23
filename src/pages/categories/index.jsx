import { Link } from "react-router-dom";

export function CategoriesHome() {
    return(
        <div style={{display: "flex", gap: 5 }}>
            <Link to={"./good-eats"}>Good Eats</Link>
            <Link to={"./parks"}>Parks</Link>
            <Link to={"./beaches"}>Beaches</Link>
        </div>
    )
}