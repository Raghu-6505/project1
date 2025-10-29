import React from 'react';
// Imports the Port component from the components folder.
import Port from './components/Port.jsx'; 
// Note: Changed the file extension to .jsx for better clarity if you are using that extension
import './App.css';

function App() {
  return (
    <>
      {/* Renders the Portfolio/Contact component */}
      <Port /> 
    </>
  );
}

export default App;