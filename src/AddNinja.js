import React, { Component } from 'react';

class AddNinja extends Component {
    state = {
        name : null,
        age : null,
        belt : null
    }
    handleChange = (e) => {
        this.setState({
            // name : e.target.name,
            // age : e.target.age, 
            // belt : e.target.belt,
            [e.target.id] : e.target.value //accept form input from user
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //displays whatever the user types in to the form
        // console.log(this.state);
        //this is simply a way to pass data from child component to the parent component (Add.js) 
        //so that the newly added ninja can be automatically shown on the user page
        this.props.addNinja(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="name">Age: </label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="name">Belt: </label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja