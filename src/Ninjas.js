import React, { Component } from 'react'

class Ninjas extends Component {
    render() {
        // console.log(this.props) //by default when a parent component passes a property to a child component, 
        //the child component would see the props thats been pass and can access all the props using this.props.propname
        //Destrucing.. destructure the name, age and belt properties from this.props.name to name and this.props.age to age                
        const { name, age, belt } = this.props;         
        return (
            <div className="ninja">
                <div>Name : { name }</div>
                <div>Age : { age }</div>
                <div>Belt : { belt }</div>
            </div>
        )
    }
}

export default Ninjas