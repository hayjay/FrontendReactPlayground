import React from 'react'
import './Ninjas.css';
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
    const { deleteNinja } = props;
    // const ninjas = this.props.ninjas;
    //iterate over our ninjas list and display the list in jsX formats to the user / parent component who needs this component
    // const ninjasList = ninjas.map((each_record) => {
    //     if (each_record.age > 20) {
    //         return (
    //             <div className="ninja" key={each_record.id}>
    //                 <div>Name : { each_record.name }</div>
    //                 <div>Age : { each_record.age }</div>
    //                 <div>Belt : { each_record.belt }</div>
    //             </div>
    //         )    
    //     } else {
    //         return null
    //     }
        
    // })
    const ninjasList = ninjas.map((each_ninja) => {
        return each_ninja.age > 20 ? (
            <div className="ninja" key={each_ninja.id}>
                <div>Name : { each_ninja.name }</div>
                <div>Age : { each_ninja.age }</div>
                <div>Belt : { each_ninja.belt }</div>
                {/* 
                    We passed deleteNinja(ninja.id) method to an arrow function because passing deleteNinja() directly to the button means
                    means that the function would get executed immediately even without clicking the delete button.
                    This is a good reason of passing it to an arrow function so it could wait for a click event from the user.
                 */}
                <button onClick={ () => { deleteNinja(each_ninja.id) } }>Delete Ninja</button>
            </div>
        ) : null;
    })

    return (
        <div className="ninja-list">
            {/* In this div, Display our ninja list jsX variable which holds the ninjas data */}
            { ninjasList } 
        </div>
    )
}

export default Ninjas