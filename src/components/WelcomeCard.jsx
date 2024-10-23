import './WelcomeCard.css';

export default function WelcomeCard() {
  return (
    <>
      <div className="welcome-card">
        <h1>Welcome to Van-Go!</h1>
        <p>Van-Go! is a location guessing game based out of Vancouver, B.C.</p>
        <p>Heres how it works:</p>
        <ol>
          <li>Choose a category to start the game</li>
          <li>Guess the location based on the images shown</li>
          <li>Get points for how close your guess is to the real location</li>
          <li>Save your favorite locations</li>
        </ol>
        <button>Play</button>
      </div>
    </>
  );
}