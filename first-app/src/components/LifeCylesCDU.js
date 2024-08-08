import React, { Component } from 'react';
import LifeCylesCDUChild from './LifeCylesCDUChild';

export class LifeCylesCDU extends Component {
    constructor(props) {
      console.log("Class Constructor")
      super(props)
    
      this.state = {
         greetingTxt:"Hello"
      }
    }
    /**
     * when using the Component Did Update the flow of the code happens as following :
     * 1- constructor will be called first
     * 2- reder function will be called afterwards
     * 3- when button clicked the ComponentDidUpdate will be called as a reaction to the state being updated 
     * 4- Render function will be called then to update the new state
     * 
     * note that constructor won't be called when updating 
     */

    /**
     * When we have a child which has also a componentDidUpdate it must be updated first before going back to the parent
     * though when parent is updated, all children will also be updated which causes Application slow down 
     * thus as a rule of thumb you may consider making independent components.
     */
    changeGreeting=() => {
        console.log("Change Greeting method")
        this.setState(prevState => {
            console.log("Updating the state")
            return {
                greetingTxt:prevState.greetingTxt==="Hello"?"Goodbye":"Hello"
            }
        })
    }
    componentDidUpdate(){
        console.log("Method of Update component !")
    }
  render() {
    console.log("Render function of CDU")
    return (
      <div>
        <h1>{this.state.greetingTxt}</h1>
        <button onClick={this.changeGreeting}>Exit</button>
        <hr/>
        <LifeCylesCDUChild/>
      </div>
    )
  }
}

export default LifeCylesCDU