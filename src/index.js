import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DrumMachine from "./DrumMachine";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="root">
      <DrumMachine />
    </div>
  </React.StrictMode>
);
