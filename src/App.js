import React from 'react';
import Ninjas from './Ninjas';
function App() {
  const state = {
    ninjas : [
      { "name" : "Nurudeen Ajayi", "age" : 23, id : 1, "belt" : "green" },
      { "name" : "Ishola Kazeem", "age" : 46, id : 3, "belt" : "yellow" }
    ] 
  }
  return (
    <div className="App">
      <h1>My First React App!</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas={state.ninjas}/>

    </div>
  );
}

export default App;
