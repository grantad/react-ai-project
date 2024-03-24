import React from 'react';
import NavigationMenu from './NavigationMenu';
import Carousel from './Carousel';
import About from './About';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Carousel />
      <About />
      <Footer />
    </div>
  );
}

export default App;
