import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import '../css/WelcomeCard.css';
import '/Van.svg';
import '/Go.svg';

export default function WelcomeCard() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const results = JSON.parse(sessionStorage.getItem("results"));

  return (
    <motion.div
      className="welcome-card"
      initial={{ opacity: 0, y: 20 }} // Start faded out and slightly below
      animate={isClicked ? { x: "-100vw" } : { opacity: 1, y: 0 }} // Slide out on button click
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (isClicked) {
          navigate("/categories"); // Navigate to the next page after animation
        }
      }}
    >
      <h1>Welcome to</h1>
      <div className="logo-container">
        <motion.img 
          src="/Van.svg" 
          alt="Van Logo" 
          className="logo1" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
        />
        <motion.img 
          src="/Go.svg" 
          alt="Go Logo" 
          className="logo2"
          initial={{ x: -350, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.25, ease: "easeInOut", delay: 2 }} 
        />
      </div>
      <motion.div
        className="welcome-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 4 }}
      >
        <p>Van-Go! is a location guessing game based out of Vancouver, B.C.</p>
        <h2>Heres how it works:</h2>
        <ol>
          <li>Choose a category to start the game</li>
          <li>Add a pin on the minimap where you think each photo is located</li>
          <li>Get points for how close your guesses were to the real location</li>
          <li>Save your favorite locations</li>
        </ol>
        <div style={{width: "100%"}}>
          <h3 style={{margin: "0"}}>Latest score(s):</h3>
          <div style={{paddingLeft: "1rem", marginBottom: "1rem"}}>
            {results && results.reverse().map((result) => {
              return(
                <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 0}}>
                  <p style={{margin: 0}}>{result.category}</p>
                  <p style={{margin: 0}}>{result.score}</p>
                </div>
              )
            })}
          </div>
        </div>
        <button
          className="play-button"
          onClick={() => setIsClicked(true)} // Trigger animation on click
        >
          Play Now!
        </button>
      </motion.div>
    </motion.div>
  );
}
