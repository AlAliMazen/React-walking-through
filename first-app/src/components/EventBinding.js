import React from "react";

class EventBinding extends React.Component{
    constructor(props){
        super(props);
        //state can have many properties as many as we want 
        this.state={
            introductionText:"Hello",
            buttonText:"Exit"
        }
        //we can use bind mechanism inside the constructor 
        this.thirdForm=this.thirdForm.bind(this)
        
    }

    // There are four ways on how to bind events and components
    /**
     * 
     * 1- Use an arrow fucntion in the render method -> used mostly when there are parametrs to give to the method
     * 2- We can use the bind method in the render function to connect the event with the method 
     * 3- we can use the bind method inside the constructor : mostly used when calling method only one time.
     * 4- last but not least we can use the arrow function in the mehtod call.
     */

    handleClick(){
        this.setState({
            introductionText:this.state.introductionText=="Hello"?"GoodBye":"Hello",
        })
    }

    thirdForm(){
        this.setState({
            introductionText:this.state.introductionText=="Hello"?"thirdForm":"Hello",
        })
    }

    secondHandlClick(){
        this.setState({
            introductionText:this.state.introductionText=="Hello"?"Second Mehtod":"Hello",
        })
    }

    fourthForm=()=>{
        this.setState({
            introductionText:this.state.introductionText=="Hello"?"Good Bye":"Hello",
        })
    }

    render(){
       return (
        
        <div>
            <h1>{this.state.introductionText} {this.props.name} ! {this.props.greeting} </h1>
            
            <button onClick={()=>this.handleClick()}>{this.state.buttonText}</button>
            <button onClick={this.secondHandlClick.bind(this)}>Second</button>
            <button onClick={this.thirdForm}>third Form</button>
            <button onClick={this.fourthForm}>Fourth Form</button>

        </div>
       )
    }
}


export default EventBinding