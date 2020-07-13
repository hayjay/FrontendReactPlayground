import React from 'react'

//This is a functional/UI based component.

/**
 * What this mean is that props sent from any container/class based component cant be accessed via this.props
 * They (props in functional/ui components) can only be accessed by passing a props parameter 
 * to the functional/ui based component as seen below
*/
const Ninjas = (props) => { 
    // console.log(this.props) //by default when a parent component passes a property to a child component, 
    //the child component would see the props thats been pass and can access all the props using this.props.propname
    //Destrucing.. destructure the name, age and belt properties from this.props.name to name and this.props.age to age                
    const { ninjas } = props;
    // const ninjas = this.props.ninjas;
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

export default Ninjas