
import React, { useEffect } from 'react';
import { ViewportManager, initConsole } from './utils/viewport';
import { Messenger } from './utils/messenger';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize console if needed
    initConsole();
    
    // Initialize viewport manager
    ViewportManager.init();
    
    // Initialize messenger
    Messenger.init();
    
    // Load game resources
    const script = document.createElement('script');
    script.src = `resources/resources.nocache.js?v=${new Date().getTime()}`;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="game-container">
      <h1>Age of Egypt</h1>
      <div id="automation" />
      <noscript>
        <div className="noscript">
          Error: JavaScript is disabled<br/>
          To play the game please enable JavaScript
        </div>
      </noscript>
    </div>
  );
}

export default App;
