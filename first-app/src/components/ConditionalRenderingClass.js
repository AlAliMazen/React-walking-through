import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
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
        <h1>{this.state.isLoggedIn?"Logged In":"You need to log in"}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the steps below:</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Complete your profile</li>
                    <li>Subscribe to the newsletter</li>
                </ol>
            </div>
        ):(<p>Please log in</p>)}
      </div>
    )
  }
}

export default ConditionalRenderingClass