import React, { Component } from 'react';
import './App.css';
import Visualizer from './Visualizer/Visualizer';
import Load from '../container/LoadSize/LoadSlider';
import SpeedMultiplier from './SpeedMultiplier/SpeedMultiplier';
import { mergeSort } from '../components/Algorithms/MergeSort';
import { selectionSort } from '../components/Algorithms/SelectionSort';

class App extends Component {

  state = {
      array: [],
      value: 40
  }

  constructor(props){
    super(props)
    this.handler = this.handler.bind(this)
  }

  handler = (e) => {
    this.setState({value: e.target.value});

    this.resetArray();
    //console.log(this.state);
  }
  
  //count = {state.value};

  resetArray = () => {
    const array = [];
    for (let i = 1; i < this.state.value; i++){
      let temp = Math.random();
      array.push(Math.ceil(temp * 500));
    }
    this.setState({array});
    console.log('Input Array: ', array)
  }

  mergeSort(){
    
    const animations = mergeSort(this.state.array);
    //console.log('Anim: ', animations);
   
    for (let i = 0; i < animations.length; i++){
      const arrayBars = document.getElementsByClassName('bars');
      const isColorChange = i % 3 !== 2;
      console.log(isColorChange);
      if (isColorChange) {
        const [barOne, barTwo] = animations[i];
        const barOneStyle = arrayBars[barOne].style;
        const barTwoStyle = arrayBars[barTwo].style;
        const color = i % 3 === 0? 'red' : '#87C232';
        
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 50);
      } else {
        setTimeout(() => {
          const [barOne, newHeight] = animations[i];
          //console.log('new Height: ', newHeight);
          const barOneStyle = arrayBars[barOne].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 50)
      }
    }
    console.log('Sorted Array: ', this.state.array);
    //console.log(animations[0]);
  }

  selectionSort(){
    const animations = selectionSort(this.state.array);
    console.log('Anim: ', animations);
    for (let i = 0; i < animations.length; i++){
      const arrayBars = document.getElementsByClassName('bars');
      const isColorChange = (i % 4 === 0 || i % 4 === 1);
      //console.log(isColorChange);
      if(isColorChange) {
        const [barOne, barTwo] = animations[i];
        const barOneStyle = arrayBars[barOne].style;
        const barTwoStyle = arrayBars[barTwo].style;
        //console.log('barone', barOne, 'bartwo', barTwo);
        //const barSorted = arrayBars[0];
        //console.log(barSorted);
        //const barSorted = arrayBars[i].style;
        const color = i % 4 === 0? 'red' : '#87C232';
        setTimeout(() => {
          console.log('i: ', i, ' color: ', color);
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          //barSorted.backgroundColor = '#87C232';
        }, i * 35);
      } else {
        setTimeout(() => {
          const [barOne, newHeightOne] = animations[i];
          const [barTwo, newHeightTwo] = animations[i];
          //console.log('new Height One: ', newHeightOne, 'new Height Two: ', newHeightTwo);
          const barOneStyle = arrayBars[barOne].style;
          const barTwoStyle = arrayBars[barTwo].style;
          barOneStyle.height = `${newHeightOne}px`;
          barTwoStyle.height = `${newHeightTwo}px`;
        }, i * 35)
        
      }

    }
    console.log('Sorted Array: ', this.state.array);

  }

  componentDidMount(){
    this.resetArray();
  }

  render() {

    //console.log(this.state.array);
    return (
      <div className="App">
        <div className="logo">
          <span className="heading-main">SORTING</span> 
          <span className="heading-sub">VISUALIZER</span> 
        </div>
        <div className="Graph">
          <Visualizer values = {this.state.array}/>
        </div>
        <div className="Load">
          <Load value={this.state.value} handler={this.handler}/>
        </div>
        <div className="Algorithm">
          <div className="algo">
            <div className="algo-title">.sortMethod()</div>
            <div className="buttons">
            <button onClick={() => {this.mergeSort()}}>Merge Sort</button>
            <button onClick={() => {this.selectionSort()}}>Selection Sort</button>
            </div>
          </div>
        </div>
        <div className="Speed">
          <SpeedMultiplier />
        </div>
      </div>
    );
  }
}

export default App;
