import React, { Component } from 'react'

export class EventsClass extends Component {
    /**
     * when using the event handler inside the class component we :
     * 1- don't need to use the function keyword 
     * 2- we have to add the event on the tag
     * 3- we have to use the this keyword to get access to the method defined 
     * 4- we don't need to use the paranthesis for using functions
     */
    clickHandlingInClass(){
        console.log("Event handling inside class component");
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandlingInClass}>click me - class component</button>
      </div>
    )
  }
}

export default EventsClass