import React, { Component } from 'react'

class Ninjas extends Component {
    render() {
        // console.log(this.props) //by default when a parent component passes a property to a child component, 
        //the child component would see the props thats been pass and can access all the props using this.props.propname
        //Destrucing.. destructure the name, age and belt properties from this.props.name to name and this.props.age to age                
        const { ninjas } = this.props;
        //iterate over our ninjas list and display the list in jsX formats to the user / parent component who needs this component
        const ninjasList = ninjas.map((each_record) => {
            return (
                <div className="ninja" key={each_record.id}>
                    <div>Name : { each_record.name }</div>
                    <div>Age : { each_record.age }</div>
                    <div>Belt : { each_record.belt }</div>
                </div>
            )    
        })

        return (
            <div className="ninja-list">
                {/* In this div, Display our ninja list jsX variable which holds the ninjas data */}
                { ninjasList } 
            </div>
        )
    }
}

export default Ninjas