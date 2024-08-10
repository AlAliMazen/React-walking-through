import React, { Component } from 'react'
import importedNames from '../importedNames'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         names:importedNames
      }
    }
    handleChnage=(event)=>{
        let givenName=event.target.value.toLowerCase();
        console.log(givenName);
        const filteredNames=importedNames.filter( name =>{
            return name.toLowerCase().includes(givenName)
        })
        this.setState({
            names:filteredNames
        })

    }
  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>match name found {this.state.names.length}</p>
        <form>
            <input 
            id="nama-search" 
            type='text' 
            placeholder='searchnames'
            onChange={(event)=> this.handleChnage(event)} />

        </form>
        <div style={{margin:'auto'}}>
            <p>{this.state.names.map(name=>{
                return <p key={name}>{name}</p>
            })}</p>
        </div>
      </div>
    )
  }
}

export default SearchBar