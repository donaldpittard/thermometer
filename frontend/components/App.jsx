import React, { Component } from 'react';
import Bar from './Bar/Bar.jsx';
import uuidv1 from 'uuid/v1';
import { getPosition, range } from '../lib/utils';
import { fetchWeather } from '../lib/api-client';
import '@csstools/normalize.css';
import styles from './App.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {},
      numBars: 12,
    };
  }

  notify() {
      toast('Wow so easy, yea right :(');
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
            weather: weather.data[0]
        });
    } catch (err) {
        this.handleError(err.message);
        return;
    }
  }

  render() {
    const bars = range(this.state.numBars).map(num => {
        return <Bar key={uuidv1()} number={num} />;
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
