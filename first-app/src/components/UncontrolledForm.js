import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
      super(props)
    this.inputName=React.createRef();
    this.category=React.createRef();
    this.comment=React.createRef();
      
    }
    /**
     * Uncontrolled component will be managed and maintained by the DOM. Therefor, we don't actually need 
     * any onChange or to set the State.
     * 
     * But in order to get the value from the input fields we have to use the refs and create them in the 
     * constructor of the class. 
     * 
     * 1- we can remove all onChnage and this state from the code. 
     * 
     * 
    

    /**
     * 
     * We don need the onSubmit handler to check result and see how things works behind the scene.
     * 
     */
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.inputName.current);
        console.log(this.inputName.current.value);

        console.log(this.category.current);
        console.log(this.category.current.value);
        
        console.log(this.comment.current);
        console.log(this.comment.current.value);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <h2>Please fill out the form below:</h2>
            <div>
            <label htmlFor='id-name'>Name</label>
            <input 
                ref = {this.inputName}
                id='id-name' 
                name='name' 
                type='text'
                onChange={this.handleChange}
                />
            </div>
            <div>
            <label htmlFor='id-category'>Select a category</label>
            <select id="id-category" name="category" ref = {this.category}>
                <option value="website">Webiste issue</option>
                <option value="order">Order issue</option>
                <option value="general">General inquiry</option>
            </select>
            </div>
            <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea id='id-comments' name='comments' ref = {this.comment}/>
            </div>
            <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default UncontrolledForm