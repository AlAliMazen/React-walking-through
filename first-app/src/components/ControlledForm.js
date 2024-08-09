import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         category:'',
         comment:'',
      }
    }
    /**
     * Controlled Components are where the inpute's are managed and maintained
     * by React's state
     * 
     * when providing the  following code without the value in the name input 
     * the DOM will manage the page because the submit refreshes the whole page 
     * which is something we don't want. 
     * 
     * by providing the value={this.state.name} the page will not be refreshed but the input 
     * will always take the value from the state 
     * 
     * This is also a problem because the input won't be working anymore since it always takes its 
     * value from the name state. We can see the error in the console. 
     * To solve this we have to listen to the onChange attribute and call a method which will 
     * help to change the state. Thus, add an onChnage to the input tag and call a function that update the
     * state. 
     * 
     * the method onChange will implicitly pass an event which gives us the text that has been inserted into the input field.
     * Even after calling the onChange, the controll is still by the DOM and when submitting the form, the whole page is refresshed 
     * which is something we don't want. 
     * 
     * 
     */
    handleChange=(event)=>{
        this.setState({
            /**the event.target.value gives the accumolative text in the input field. */
            name:event.target.value
        })
    }

    handelSelectionChange=(event)=>{
        console.log(event.target.value)
        this.setState({
            category:event.target.value
        })
    }

    handelCommentsChange=(event)=>{
        console.log(event.target.value)
        this.setState({
            comment:event.target.value
        })
    }

    /**
     * 
     * Remember to prevent the submit button from refreshing the page, we have to prevent its default mechnaism 
     * and that is achieved by the onSubmit eventhandler on the form. 
     * 
     */
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <h2>Please fill out the form below:</h2>
            <div>
            <label htmlFor='id-name'>Name</label>
            <input 
                value={this.state.name}
                id='id-name' 
                name='name' 
                type='text'
                onChange={this.handleChange}
                />
            </div>
            <div>
            <label htmlFor='id-category'>Select a category</label>
            <select id="id-category" name="category" value={this.state.category} onChange={this.handelSelectionChange}>
                <option value="website">Webiste issue</option>
                <option value="order">Order issue</option>
                <option value="general">General inquiry</option>
            </select>
            </div>
            <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea id='id-comments' name='comments' value={this.state.comment} onChange={this.handelCommentsChange}/>
            </div>
            <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default ControlledForm