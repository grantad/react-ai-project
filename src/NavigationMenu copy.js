import React from 'react';
import './NavigationMenu.css';

function NavigationMenu() {
  return (
    <nav className="navigationMenu">
      <ul className="menuList">
        <li className="menuItem"><a href="#home">Home</a></li>
        <li className="menuItem"><a href="#about">About</a></li>
        <li className="menuItem"><a href="#services">Characters</a></li>
        <li className="menuItem"><a href="#contact">Origins</a></li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
