import React, { Component } from 'react';
import './App.css';
import Visualizer from './Visualizer/Visualizer';
/* import Load from './LoadSlider/LoadSlider'; */
import MergeSort from './Algorithm/MergeSort';

class App extends Component {

  state = {
      array: []
  }

  count = 10;

  resetArray = () => {
    const array = [];
    for (let i = 1; i <= this.count; i++){
      let temp = Math.random();
      array.push(Math.ceil(temp * 500));
    }
    this.setState({array});
    /* console.log(array); */
  }

  mergeSort(){
    console.log('button is working');
    const JSsortedArray = this.state.array.slice().sort((a,b) => a-b);
    const sortedArray = MergeSort(this.state.array);

    console.log(equalArrays(JSsortedArray, sortedArray));

    /* this.setState({array: sortedArray}); */

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
        <div className="Load">
          {/* <Load/> */}
        </div>
        <div className="Algorithm">
          <button onClick={() => {this.mergeSort()}}>Merge Sort</button>
        </div>
        <div className="Speed"></div>
      </div>
    );
  }
}

function equalArrays(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++){
    if (a[i] !== b[i]) return false;
  }
  return true;
  
}

export default App;
