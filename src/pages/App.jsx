import React from 'react';
import WelcomeCard from '../components/WelcomeCard.jsx';
import '../css/App.css';
import '../css/index.css';
import bgImage from "../../public/Background.jpg";

export default function App() {
  return (
    <>
      <img className="backgroundImage" src={bgImage} alt="vancouver skyline background" />
      <div className="welcome-bg">
        <WelcomeCard />
      </div>
    </>
  );
}