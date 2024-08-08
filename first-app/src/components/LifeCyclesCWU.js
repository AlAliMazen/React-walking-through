import React, { Component } from 'react'
import LifeCylesCWUChild from './LifeCylesCWUChild'

export class LifeCyclesCWU extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
        }
    }
    /**
     * This class shows the idea of component will Unmount , when you run the comonent 
     * you should see the cordinates of the mouse in the console. These cordinates comes from the child comonent which 
     * is just a tracker that will be shown per-default as the visible state in the parent class is set to true. 
     * The button in the parent component turns the visibility to false which causes the mouse tracker component to go out 
     * and be unmounted. This will also show an error because we will be trying to remove (hide - unmount) a component that 
     * is still listening to X and Y but it is not there anymore.
     * 
     * To solve this we have to write the componentWillUnmount() method which will remove the event listener -> mousemove 
     * from the child component.
     * 
     * 
     * Last but not least the life cyles of a component are all used in the stateful class component NOT in the 
     * statless function component. 
     * 
     */

    toggleDisplay = () => {
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    render() {
        return (
            <div>
                {this.state.visible && <LifeCylesCWUChild />}
                <button onClick={this.toggleDisplay}>Toggle Display</button>
            </div>
        )
    }
}

export default LifeCyclesCWU