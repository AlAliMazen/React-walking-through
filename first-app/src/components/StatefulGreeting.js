import React from "react";

//in order to use the class component we have to extent it from React.Component
//pay attention that we have to use Pascal Case 
//since classes don't return anything we have to make a render function that return something 
//To access the props we can use the 'this.props.NAME_OF_PROPERTY'
class StatefulGreeting extends React.Component{

    //we can use constructors to let the classes maintaine their states and uodate them selves bases on user's interactions
    //it is always best practice to use the props inside the constructor and the super-> used to inherit from the the parent class

    constructor(props){
        super(props);
        //state can have many properties as many as we want 
        this.state={
            introductionText:"Hello",
            buttonText:"Exit",
            count:0,
        }
    }

    // add the function -> event listener here
    handleClick(){
        
        /**
         * the problem of the setState function is that it is an asynchronous function meaning that it exexcutes while other
         * code is also executes. The console log will always print the state which is already ther before it gets updated.
         * In order to solve this problem, we have to use a second parameter to the set state function as a call back function and 
         * let the magic happen as following
         * 
         */

        /**
         * As a rule of thumb please use thumb use the third form of setState where it takes the prevSate, prevProps
         * 
         */
        this.setState({
            /**
             * what if we want to change the text of the text and the button inter-changeably 
             */
            introductionText:this.state.introductionText=="Hello"?"GoodBye":"Hello",
            buttonText:this.state.buttonText==="Exit"?"Enter":"Exit",
            
        },()=>{
            //this will be executes AFTER the setState is executed
            console.log("New STATE : ",this.state.introductionText);
            console.log("New State",this.state.buttonText)
            this.countClicks()
        })
        console.log(this.state.introductionText)

        this.setState((prevState,prevProps)=>{
            //return an object
            return {
                introductionText:prevState.introductionText==="Hello"?"Goodbye":"Hello",
                buttonText:prevState.buttonText==="Exit"?"Enter":"Exit",
            }
        })
       
    }

    countClicks(){
        /**
         * The best choice is to use the setState in its third form which takes prevState, prevProps as following
         */
        this.setState((prevState, prevProps)=>{
            console.log("prev state: ", prevState);
            console.log("prev Props: ", prevProps);
            return {
                count:prevState.count+1
            }
        })
    }
    render(){
       return (
        //When accessing the state from a class we use this.state
        //in order to make interactivity we need 3 things 
        /**
         * 1- add onClick to the element in order to call an event
         * 2- add event listener when the component is clicked
         * 3- use the setState to change the state of the component
         * 
         */
        <div>
            <h1>{this.state.introductionText} {this.props.name} ! {this.props.greeting} </h1>
            <p>Count value is {this.state.count}</p>
            <button onClick={()=>this.handleClick()}>{this.state.buttonText}</button>
        </div>
       )
    }
}


export default StatefulGreeting