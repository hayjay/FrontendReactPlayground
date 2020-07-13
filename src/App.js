import React from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
function App() {
  const state = {
    ninjas : [
      { "name" : "Nurudeen Ajayi", "age" : 19, id : 1, "belt" : "Green" },
      { "name" : "Ishola Kazeem", "age" : 46, id : 3, "belt" : "Yellow" },
      { "name" : "Ninja Deen", "age" : 29, id : 4, "belt" : "Grey" }
    ] 
  }
  return (
    <div className="App">
      <h1>My First React App!</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas={state.ninjas}/>
      <AddNinja/>
    </div>
  );
}

export default App;
