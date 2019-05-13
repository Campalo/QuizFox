import React from 'react';
import '../App.css';
import MyButton from './Button';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      {/* background image in css file */}
      <h1>Welcome to QuizFox</h1>
      <h3>A Trivial Pursuit-like game created during a React bootcamp</h3>
      <MyButton>
        <NavLink to="/categories">Play Now</NavLink>
      </MyButton>
    </header>
  );
}

export default Header;
