import React from 'react';
import Ninjas from './Ninjas';
function App() {
  return (
    <div className="App">
      <h1>My First React App!</h1>
      <p>Welcome :)</p>
      <Ninjas name="Nurudeen" age="34" belt="Brown"/>
      <Ninjas name="Dhikrullah" age="89" belt="Yellow"/>

    </div>
  );
}

export default App;
