import React from 'react';
import './App.css';
import Introduction from './components/Introduction';


const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Introduction />
      </header>
    </div>
  );
}

export default App;

