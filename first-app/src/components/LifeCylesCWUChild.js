import React, { Component } from 'react'

export class LifeCylesCWUChild extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        mouseX: 0,
        mouseY: 0,
      }
    }
    trackMouse = e => {
      console.log('Mouse moved')
      this.setState({
        mouseX: e.clientX,
        mouseY: e.clientY,
      })
    }
    //will be called when the component is moundted into the DOM (UI)
    componentDidMount() {
      window.addEventListener('mousemove', this.trackMouse);
    }
    /**
     * This method will be called just before the component will be unmounted and 
     * used to remove the eventListener. 
     */
    componentWillUnmount() {
        console.log('unmounting')
        window.removeEventListener('mousemove', this.trackMouse)
    }
    render() {
      return (
        <div>
          <h1>Tracking Mouse...</h1>
          <p>X: {this.state.mouseX} Y: {this.state.mouseY}</p>
        </div>
      )
    }
  }

export default LifeCylesCWUChild