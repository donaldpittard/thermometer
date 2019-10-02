import React, { Component } from 'react';
import Bar from './Bar/Bar.jsx';
import uuidv1 from 'uuid/v1';
import { getPosition, range } from '../lib/utils';
import { fetchWeather } from '../lib/api-client';
import '@csstools/normalize.css';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      numBars: 12,
    };
  }

  async componentDidMount() {
    const pos = await getPosition();
    const weather = await fetchWeather(pos);

    this.setState({
      weather,
    });
  }

  render() {
    const bars = range(this.state.numBars).map(num => {
        return <Bar key={uuidv1()} number={num} />;
    });

    return (
      <div className="thermometer">
        {bars}
      </div>
    );
  }
}

export default App;
