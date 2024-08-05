import React, { Component } from 'react'
import MehtodsAsPropsChild from './MehtodsAsPropsChild'

export class MethodsAsPropsParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false,
      }
    }
    /**
     * to let the parent be updated from child we should pass the state from the parent to the childe as props
     * make methods which change the state and call this method as props 
     */
    handleSignIn = () => {
        this.setState({
          isLoggedIn: true,
        });
        console.log(this);
      };
    
      handleSignOut = () => {
        this.setState({
          isLoggedIn: false,
        });
        console.log(this);
      };
  render() {
    return (
      <div>
        <MehtodsAsPropsChild isLoggedIn={this.state.isLoggedIn} handleSignIn={this.handleSignIn} handleSignOut={this.handleSignOut}/>
      </div>
    )
  }
}

export default MethodsAsPropsParent