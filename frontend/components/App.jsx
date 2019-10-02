import React, { Component } from 'react';
import Bar from './Bar/Bar.jsx';
import uuidv1 from 'uuid/v1';
import { getPosition, range, units } from '../lib/utils';
import { fetchWeather } from '../lib/api-client';
import '@csstools/normalize.css';
import './App.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Temperature from './Temperature/Temperature.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: null,
      numBars: 12,
      unit: units.fahrenheit
    };
  }

  handleError(err='An error has occurred') {
    toast.error(err, {
        position: toast.POSITION.TOP_CENTER
    });
  }

  async componentDidMount() {
    try {
        const pos = await getPosition();
        const weather = await fetchWeather(pos);

        this.setState({
            temp: parseInt(weather.data[0].temp)
        });
    } catch (err) {
        this.handleError(err.message);
        return;
    }
  }

  temperatureIsInBar(temperature, barNumber) {
      return barNumber === 2;
  }

  render() {
    const bars = range(this.state.numBars).map(num => {
        const {temp, unit} = this.state;

        return (<Bar 
            key={uuidv1()} 
            number={num}
        >
            {this.temperatureIsInBar(temp, num) 
                ? <Temperature temp={temp} unit={unit} /> 
                : null}
        </Bar>);
    });

    return (
      <div className="thermometer">
        <ToastContainer />
        {bars}
      </div>
    );
  }
}

export default App;
