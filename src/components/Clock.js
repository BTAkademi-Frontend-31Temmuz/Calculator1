
import React,{useState} from "react";
import StateChange from "./B";


export default class Clock extends React.Component {
    
  state = {count : 0}

    handleIncrement = () =>{
      //this.setState({count : this.state.count  + 1})
      this.setState(StateChange(this.state));
      
    }
  
    render() {
  
      return (
        <div>
        
          <div>{this.state.count}</div>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
      );
    }
  }