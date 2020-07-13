import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
class App extends Component {
  state = {
    ninjas : [
      { "name" : "Nurudeen Ajayi", "age" : 19, id : 1, "belt" : "Green" },
      { "name" : "Ishola Kazeem", "age" : 46, id : 3, "belt" : "Yellow" },
      { "name" : "Ninja Deen", "age" : 29, id : 4, "belt" : "Grey" }
    ] 
  }

  addNinja = (createdNinjaObject) => {
    console.log(createdNinjaObject)
    //because we need an id for every ninja object, we need to create this since the user doesnt type any id in the form
    createdNinjaObject.id = Math.random();
    //we dont want to directly push the new record to the existing ninjas array list. 
    //We need to first copy the existing ninjas array and then add the newly created ninja to it then push the result to the ninjas list

    let new_ninjas_list = [...this.state.ninjas, createdNinjaObject];
    // add the newly created ninja to the existing ninjas state/data
    this.setState({
      ninjas : new_ninjas_list
    })
  }

  //this parameter will be passed in when the child component (Ninjas) calls it
  //i.e when a user clicks a delete ninja button
  deleteNinja = (ninja_id) => {
    console.log(ninja_id);
    /*
      Grab the current ninjas list and filter it.
      The array.filter method is used because we don't want to change 
      the ninjas array we only want to create a copy of it and then manipulate it.
      It returns a new array from the manipulated array based on a certain condition. 
      The condition is to see if the passed ninja_id (fom button clicked) is equal to the currently iterated ninja id while filtering
      If it is, then we remove it from the existing ninjas list and create a new array from it
    */
   let ninjas = this.state.ninjas.filter((each_ninja) => {
    /* Returns false if both ids are not thesame therefor it adds this iterated ninja to the new ninjas list.
    * But if it is equal to one another, then this current ninja gets removed from the ninjas list
    * and then we create another ninjas array from there using the filter method.
    */
    return each_ninja.id !== ninja_id; 
   });
   //after removing the ninja from the list, save the newly manipulated ninjas array to the state
   this.setState({
     ninjas : ninjas
   })
  }

  //gets executed only once when the component is first loaded to the page
  componentDidMount(){
    console.log('component mounted')
  }

  //gets executed only when the component props or its state changes
  //could be after changing a state by interacting with the form and submit or deleting a ninja
  //because clicking submit after adding a ninha calls a method and that handleSubmit or deleteNinja changes the state or props
  
  componentDidUpdate(prevpProps, prevState) {
    console.log('component updated')
    console.log(prevpProps, prevState)
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
  
}

export default App;
