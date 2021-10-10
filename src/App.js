
import './App.css';
import React from "react";
import Calculator from './components/CalculatorPanel';
import Display from './components/Display';
import Calculate from './components/Calculate';
import Clock from './components/Clock';


export default class App extends React.Component {
    
  
  constructor(props){
    super(props);
    console.log(props);
    console.log(this.props);
   
  }
  /*value={this.state.next || this.state.total || "0"}/>*/
  handleClick = buttonName =>{
      this.setState(Calculate(this.state,buttonName));
      
  }
  render(){
    return (
      <div>
        <Clock />
        <Display /> 
       
      <Calculator clickHandler={this.handleClick}></Calculator>
      </div>
    );
  }
}


