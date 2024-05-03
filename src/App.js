import React from "react";
import AccountContainer from "./components/AccountContainer";
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="app-icon">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;