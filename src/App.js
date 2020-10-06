import React from "react";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <Clock city="Brisbane" timeZone="Australia/Brisbane" />
      <Clock city="Taipei" timeZone="Asia/Taipei" />
      <Clock city="Paris" timeZone="Europe/Paris" />
      <Clock city="Los Angeles" timeZone="America/Los_Angeles" />
    </div>
  );
}

export default App;
