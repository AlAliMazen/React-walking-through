import React from "react"; //gives access to every thing react can do including rendering and creating 


// function FunctionalGreeting(){
//      return <h1>  Hello From React</h1>
// }

//comvertign it into arrow function
const FunctionalGreeting=()=> <h1 className="bg-blue">Hello from REACT</h1>


//we use the default in order to be able to use any other name than FunctionalGreeting
export default FunctionalGreeting;
