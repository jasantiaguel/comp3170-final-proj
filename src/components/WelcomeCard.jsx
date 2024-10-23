import { Link } from "react-router-dom";
import './WelcomeCard.css';

export default function WelcomeCard() {
  return (
    <>
      <div className="welcome-card">
        <img 
          src="https://placehold.co/200x200" 
          alt="Placeholder Logo" 
          className="logo" 
        />
        <h1>Welcome to Van-Go!</h1>
        <p>Van-Go! is a location guessing game based out of Vancouver, B.C.</p>
        <h2>Heres how it works:</h2>
        <ol>
          <li>Choose a category to start the game</li>
          <li>Guess the location based on the images shown</li>
          <li>Get points for how close your guess is to the real location</li>
          <li>Save your favorite locations</li>
        </ol>
        <Link to={"/test"}>
          <button className="play-button">Play Now!</button>
        </Link>
      </div>
    </>
  );
}