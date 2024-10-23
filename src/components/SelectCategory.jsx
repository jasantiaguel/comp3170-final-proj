import { Link } from "react-router-dom";
import './SelectCategory.css';


function SelectCategory() {
    return (
        <div className="app-bg">
            <div className="overlay">
                <div className="container">
                    <h1 className="title">Select a Category to Start!</h1>
                    <div className="categories">
                        <div className="card">
                            <img src="public/beach.png" alt="Beach" className="card-image" />
                            <div className="card-overlay">
                            <Link className="card-link" to={"./beaches"}>Beaches</Link>
                            </div>
                        </div>
                        <div className="card">
                            <img src="public/parks.png" alt="Park" className="card-image" />
                            <div className="card-overlay">
                            <Link className="card-link" to={"./parks"}>Parks</Link>
                            </div>
                        </div>
                        <div className="card">
                            <img src="public/eats.png" alt="Food" className="card-image" />
                            <div className="card-overlay">
                            <Link className="card-link" to={"./good-eats"}>Good Eats</Link>
                            </div>
                        </div>
                    </div>
                    <Link className="saved" to={"../Saved"}>
                        <button>Saved Locations</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default SelectCategory;