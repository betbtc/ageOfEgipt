
import React, { useEffect } from 'react';
import { ViewportManager, initConsole } from './utils/viewport';
import { useMessenger } from './hooks/useMessenger';
import './App.css';

function App() {
  const { initMessenger, sendMessage } = useMessenger();

  useEffect(() => {
    // Initialize console if needed
    initConsole();
    
    // Initialize viewport manager
    ViewportManager.init();
    
    // Initialize messenger
    initMessenger();

    // Load game resources 
    const loadGameResources = () => {
      const script = document.createElement('script');
      script.src = `resources/resources.nocache.js?v=${new Date().getTime()}`;
      document.body.appendChild(script);
    };

    loadGameResources();
  }, [initMessenger]);

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
