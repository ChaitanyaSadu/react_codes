import React, { Component } from 'react'

class Body extends Component{
    constructor(){
        super();
        this.state = {
            count:0,
            name:"tarun"
        }
    }


    handleInc= ()=> {
        // console.log("inc",);
        this.setState({count: this.state.count + 1});
        this.setState({name: this.state.name});

    }

    handleDec=()=> {
        // console.log("dec",);
        this.setState({count: this.state.count - 1});

    }
    render(){
        // console.log(this);
        return<div> 
            <div>hi hello</div>
            <div>{this.state.count}</div>
            <button onClick={this.handleInc}>Inc</button>
            <button onClick={this.handleDec}>Dec</button>
            </div>
    }
}

export default Body;