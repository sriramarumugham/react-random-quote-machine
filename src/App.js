import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      advice:""
    }
  }
  componentDidMount(){
    const url="	https://api.adviceslip.com/advice"
     const advice =fetch(url).then(Response=>Response.json()).then(result=>{
      const {slip}=result ;
      this.setState({
        advice:slip.advice
      })
     });
  }
  handleClick=()=>{
    this.componentDidMount();
  }
  render(){
     const {advice} =this.state;
      const result=advice ? this.state.advice :"";
    return (
      <div className="App">
        <h1>{result}</h1>
        <button onClick={this.handleClick}>next</button>
      </div>
    );
  }
}

export default App;
