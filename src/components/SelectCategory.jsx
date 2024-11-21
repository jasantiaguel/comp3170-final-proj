import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './SelectCategory.css';
import bgImage from "../../public/Background.jpg";

function SelectCategory() {
    return (
        <>
        <img className="backgroundImage" src={bgImage} alt="vancouver skyline background" />
        <motion.div
            initial={{ opacity: 0 }} // Start from the right of the viewport
            animate={{ opacity: 1 }} // Slide to its normal position (left)
            transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
        >
            <div className="app-bg">
                <div className="overlay">
                    <div className="container">
                        <h1 className="title">Select a Category to Start!</h1>
                        <div className="categories">
                            <div className="card">
                                <img src="/beach.png" alt="Beach" className="card-image" />
                                <div className="card-overlay">
                                    <Link className="card-link" to={"./beaches"}>Beaches</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src="/parks.png" alt="Park" className="card-image" />
                                <div className="card-overlay">
                                    <Link className="card-link" to={"./parks"}>Parks</Link>
                                </div>
                            </div>
                            <div className="card">
                                <img src="/eats.png" alt="Food" className="card-image" />
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
        </motion.div>
        </>
    )
}

export default SelectCategory;
