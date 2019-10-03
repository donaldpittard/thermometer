import React, { Component } from 'react';
import Bar from './Bar/Bar.jsx';
import uuidv1 from 'uuid/v1';
import { getPosition, range, units, isBetween, toFahrenheit } from '../lib/utils';
import { fetchWeather } from '../lib/api-client';
import '@csstools/normalize.css';
import './App.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Temperature from './Temperature/Temperature.jsx';
import Icon from './Icon/Icon.jsx';
import SliderIcon from './SliderIcon/SliderIcon.jsx';
import Forecast from './Forecast/Forecast.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: null,
      numBars: 12,
      unit: units.fahrenheit,
      weatherCode: null,
      forecast: {}
    };
  }

  handleError(err='An error has occurred') {
    toast.error(err, {
        position: toast.POSITION.TOP_CENTER
    });
  }

  handleSliderClick() {

  }

  async componentDidMount() {
    try {
        const pos = await getPosition();
        const weather = await fetchWeather(pos);

        this.setState({
            temp: parseInt(weather.data.temp),
            weatherCode: weather.data.code
        });
    } catch (err) {
        this.handleError(err.message);
        return;
    }
  }

  temperatureIsInBar(temperature, barNumber) {
      switch (barNumber) {
        case 0:
            return temperature >= 100;
        case 1:
            return isBetween(89, 100, temperature);
        case 2:
            return isBetween(79, 89, temperature);
        case 3:
            return isBetween(69, 79, temperature);
        case 4:
            return isBetween(59, 69, temperature);
        case 5:
            return isBetween(49, 59, temperature);
        case 6:
            return isBetween(39, 49, temperature);
        case 7:
            return isBetween(29, 39, temperature);
        case 8:
            return isBetween(19, 29, temperature);
        case 9:
            return isBetween(9, 19, temperature);
        case 10:
            return isBetween(-1, 9, temperature);
        case 11:
            return isBetween(-11, -1, temperature);
        case 12:
            return temperature < -11;
      }
  }

  render() {
    const bars = range(this.state.numBars).map(num => {
        const {temp, unit} = this.state;
        const isInBar = unit === units.celsius 
            ? this.temperatureIsInBar(toFahrenheit(temp), num)
            : this.temperatureIsInBar(temp, num);

        return (
            <Bar key={uuidv1()} number={num}>
                {isInBar
                    ? <React.Fragment>
                        <Temperature 
                            temp={temp} 
                            unit={unit} 
                            className='temp--large' 
                        />
                        <Icon 
                            weatherCode={this.state.weatherCode} 
                            className='icon--large' 
                            size={210}
                            color={'#FFFFFF'}
                        />
                        <SliderIcon onClick={this.handleSliderClick} />
                        <Forecast {...this.state.forecast} />
                    </React.Fragment>
                    : null}
            </Bar>
        );
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
