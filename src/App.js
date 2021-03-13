import React, { Component } from 'react';
import './App.css';
import Visualizer from './Visualizer/Visualizer';

class App extends Component {

  state = {
      array: []
  }

  count = 50;

  resetArray = () => {
    const array = [];
    for (let i = 1; i <= this.count; i++){
      let temp = Math.random();
      array.push(Math.ceil(temp * 500));
    }
    this.setState({array});
    /* console.log(array); */
  }

  
  
  componentDidMount(){
    this.resetArray();
  }

  render() {

    console.log(this.state.array);
    return (
      <div className="App">
        <div className="Graph">
          <Visualizer values = {this.state.array}/>
        </div>
      </div>
    );
  }

}

export default App;
