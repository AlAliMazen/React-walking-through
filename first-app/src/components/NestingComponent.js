import React, { Component } from 'react'
import UserData from './UserData'
import UserMessage from './UserMessage'

export class NestingComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded:false,
         isLoggedIn:true,
      }
    }

  render() {
    return (
      <div>
        <h1> {this.state.isLoggedIn?"Logged In":"You need to log in"}</h1>
        <UserData isLoaded={this.state.isLoaded}/>
        <UserMessage isLoggedIn={this.state.isLoggedIn}/>
      </div>
    )
  }
}

export default NestingComponent