import React, { Component } from 'react';
import Bar from './Bar/Bar.jsx';
import uuidv1 from 'uuid/v1';
import { getPosition, range, units, isBetween, toFahrenheit, match } from '../lib/utils';
import { fetchWeather } from '../lib/api-client';
import '@csstools/normalize.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Forecast from './Forecast/Forecast.jsx';
import MainTemperatureDisplay from './MainTemperatureDisplay/MainTemperatureDisplay.jsx';

class App extends Component {
  constructor(props) {
    const numBars = 12;
    super(props);

    this.handleSliderClick = this.handleSliderClick.bind(this);
    this.handleForecastClick = this.handleForecastClick.bind(this);

    this.state = {
      temp: null,
      numBars: numBars,
      unit: units.fahrenheit,
      weatherCode: null,
      forecast: [],
      showForecast: false,
      bars: range(numBars).map(num => {
        return {key: uuidv1()}
      })
    };
  }

  handleError(err='An error has occurred') {
    toast.error(err, {
        position: toast.POSITION.TOP_CENTER
    });
  }

  handleSliderClick() {
    this.setState({
        showForecast: true
    });
  }

  async componentDidMount() {
    try {
        const pos = await getPosition();
        const weather = await fetchWeather(pos);

        this.setState({
            temp: parseInt(weather.data.temp),
            weatherCode: weather.data.code,
            forecast: weather.data.forecast
        });
    } catch (err) {
        this.handleError(err.message);
        return;
    }
  }

  temperatureIsInBar(temperature, barNumber) {
      return match(barNumber)
        .on(x => x === 0, () => temperature > 100)
        .on(x => x === 1, () => isBetween(89, 100, temperature))
        .on(x => x === 2, () => isBetween(79, 89, temperature))
        .on(x => x === 3, () => isBetween(69, 79, temperature))
        .on(x => x === 4, () => isBetween(59, 69, temperature))
        .on(x => x === 5, () => isBetween(49, 59, temperature))
        .on(x => x === 6, () => isBetween(39, 49, temperature))
        .on(x => x === 7, () => isBetween(29, 39, temperature))
        .on(x => x === 8, () => isBetween(19, 29, temperature))
        .on(x => x === 9, () => isBetween(9, 19, temperature))
        .on(x => x === 10, () => isBetween(-1, 9, temperature))
        .on(x => x === 11, () => isBetween(-11, -1, temperature))
        .otherwise(temperature < -11);
  }

  handleForecastClick() {
    this.setState({
      showForecast: false
    });
  }

  render() {
    const bars = this.state.bars.map(({key}, index) => {
        const {temp, unit} = this.state;
        const isInBar = unit === units.celsius 
            ? this.temperatureIsInBar(toFahrenheit(temp), index)
            : this.temperatureIsInBar(temp, index);

        return (
            <Bar
                number={index}
                key={key}
            >
                {isInBar
                    ? 
                    <React.Fragment>
                        <MainTemperatureDisplay
                            temp={temp} 
                            unit={unit} 
                            weatherCode={this.state.weatherCode}
                            onSliderClick={this.handleSliderClick}
                            show={!this.state.showForecast}
                        />
                        <Forecast 
                          onClick={this.handleForecastClick}
                          show={this.state.showForecast} 
                          forecast={this.state.forecast}
                        />
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
