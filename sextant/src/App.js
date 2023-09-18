import './App.css';
import React from 'react';

const Banner = ({ title }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
    </div>
  );
};
const Exhibit = ({ title, children }) => {
  return (
    <div className="exhibit">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
function App() {
  return (
    <Banner title={"Sextant"}/>
  );
}

export default App;
