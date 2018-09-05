import React, { Component } from 'react';
import './App.css';
import { District } from "./District/District";
import { randomInt } from "davids-toolbox";
import ControlPanel from './ControlPanel/ControlPanel';

class App extends Component {


  constructor() {
    super();

    this.state = {
      maxPopulation: 1000,
      districts: [],
    };


    const createParam = (label) => ({
      label: label
    });

    this.params = [
      createParam("n-clusters"),
      createParam("rural-urban")
    ];
  }


  componentWillMount() {

    const createDistrict = () => {
      return {
        population: randomInt(0, this.state.maxPopulation),
        lean: Math.random(),
      };
    }

    this.setState({
      districts: Array(900).fill(true).map(() => createDistrict())
    });

  }


  handleControlPanelChange = (v) => {
    this.setState({
      controlPanelValues: v
    });
  }

  render() {
    return (
      <div className="App">

        <div className="district-container">
          {this.state.districts.map((d) => <District
            population={d.population}
            lean={d.lean}
            maxPop={this.state.maxPopulation} />
          )}
        </div>

        <ControlPanel params={this.params} onChange={this.handleControlPanelChange} />
        {JSON.stringify(this.state.controlPanelValues)}
      </div>
    );
  }
}

export default App;
