import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCylesCDM extends Component {
    constructor(props) {
        console.log('constructor called')
        super(props)
    
        this.state = {
             data: 'loading'
        }
    }
    /**
     * When running the application the flow is as following :
     * 1- the constructor is going to be called first.
     * 2- the render function which inside ask the state inside the constructor
     * 3- ComponentDidMount will be called because it runs as soon as the component will be built.
     * 4- Inside the getData() there is a setTimeout() which will change the state of the component after 3 seconds.
     */

    /**
     * When there is a child which is for example a copy of the parent class it will run in the same as parent 
     * but when the component is built the child nust finish completely before going back to the parent. 
     */
    getData() {
        console.log('getData() called')
        setTimeout(() => {
            console.log('Data fetched!')
            this.setState({
                data: 'loaded'
            })
        }, 3000)
    }
    componentDidMount() {
        console.log('Component mounted')
        this.getData()
    }
    render() {
        console.log('Render method called')
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild/>
            </div>
        )
    } 
}

export default LifeCylesCDM