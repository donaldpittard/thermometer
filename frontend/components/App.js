import React, {Component} from 'react';
import {getPosition} from '../lib/utils';
import {fetchWeather} from '../lib/api-client';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        };
    }

    async componentDidMount() {
        const pos = await getPosition();
        const weather = await fetchWeather(pos);

        this.setState({
            weather: weather
        });
    }

    render() {
        return (
            <div>Hello World</div>
        );
    }
}

export default App;