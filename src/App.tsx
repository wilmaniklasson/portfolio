import React from 'react';
import './App.css';
import Introduction from './components/Introduction';
import CarouselComponent from './components/CarouselComponent';
import About from './components/About';
import Navbar from './components/Navbar';


const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar />
        <Introduction />
        <About />
        <CarouselComponent />
    </div>
  );
}

export default App;

