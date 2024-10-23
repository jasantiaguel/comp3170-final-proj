import React from 'react';
import WelcomeCard from './components/WelcomeCard';
import { Link } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <>
      <div className="app-bg">
        <WelcomeCard />
      </div>
    </>
  );
}