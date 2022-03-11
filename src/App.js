import  React, { Component } from 'react';
import { connect } from 'react-redux';

import Time from './components/Time';
import Weather from './components/Weather/Weather';
import "./style.scss"

import { getWetherOW } from './components/Weather/getWeatherOW';
import { getWetherSG } from './components/Weather/getWeatherSG';
import { getLocation } from './components/getLocation';

import changeWeather from './components/changeWeather';



class App extends Component {

    componentDidMount () {
        setTimeout (()=> {
            const lat = this.props.state.locationReducer.location.lat;
            const lon = this.props.state.locationReducer.location.lon
            // this.props.state.locationReducer.location.lat, this.props.state.locationReducer.location.lon
            this.props.fetchDataOW(lat, lon);
            this.props.fetchDataSG(lat, lon, this.props.state.timeReducer.date)
        }, 100)
    }

    render () {
        return (
            <div className="main-theme" id="main">
                {this.props.state.weatherReducer.weatherOW?
                    <Time store = {this.props.state} ></Time>:null}
                {this.props.state.weatherReducer.weatherOW?
                    <Weather props={this.props.state.weatherReducer} day={this.props.state.timeReducer.date.day.word}></Weather>:
                    null}
                <select id="sel" onChange={changeWeather}>
                    <option value="openweather">OpenWeather</option>
                    <option value="stormglass">StormGlass</option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}



const mapDispatchToProps = dispatch => {
    return {
        fetchDataOW: (lat, lon) => {dispatch(getWetherOW(lat, lon))},
        fetchDataSG: (lat, lon, time) => {dispatch(getWetherSG(lat, lon, time))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
