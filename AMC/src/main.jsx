import React from 'react';
import { createRoot } from 'react-dom/client';
import TekionAutonomous from '../tekion_autonomous_v140.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TekionAutonomous />
  </React.StrictMode>
);
