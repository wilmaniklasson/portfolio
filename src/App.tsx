import React from 'react';
import './App.css';
import Introduction from './components/Introduction';
import CarouselComponent from './components/CarouselComponent';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';


const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar />
        <ThemeToggle />
        <Introduction />
        <section id="About">
        <About />
        </section>
        <section id="Project">
        <CarouselComponent />
        </section>
        <Footer />
    </div>
  );
}

export default App;

