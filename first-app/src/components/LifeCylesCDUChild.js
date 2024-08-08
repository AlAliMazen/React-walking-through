import React, { Component } from 'react'

export class LifeCylesCDUChild extends Component {
    constructor(props) {
        console.log("CDU Class Constructor")
        super(props)
      
        this.state = {
           greetingTxt:"Hello"
        }
      }
      changeGreeting=() => {
          console.log("CDU CHILD Change Greeting method")
          this.setState(prevState => {
              return {
                  greetingTxt:prevState.greetingTxt==="Hello"?"Goodbye":"Hello"
              }
          })
      }
      componentDidUpdate(){
          console.log("CDU Method of Update component !")
      }
    render() {
      console.log("CDU Render function of CDU")
      return (
        <div>
          <h1>{this.state.greetingTxt}</h1>
          <button onClick={this.changeGreeting}>Exit of child</button>
        </div>
      )
    }
  }

export default LifeCylesCDUChild