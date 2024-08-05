import React from 'react'

function EventsFunctional() {
  /**
   * When using events in the stateless functional compnent we have to
   * 1- use Camel Case on the element
   * 2- use the function key word to define the function event which will be called when 
   * clicking the event
   * 3- don't use the function paranthesis on the function
   */
  function clickEventFunction(){
    console.log("Here is the function");
  }
  
  return (
    <div>
        <button onClick={clickEventFunction}>Click me - functional component</button>
    </div>
  )
}

export default EventsFunctional