import React from "react";
import { connect } from "react-redux";

function Time (store) {
    const date = store.store.timeReducer.date,
        days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    let country,
    city;
    console.log(store.store.weatherReducer.weatherOW)
    if (!!store.store.weatherReducer.weatherOW.country){
        country = store.store.weatherReducer.weatherOW.country;
        city = store.store.weatherReducer.weatherOW.name;
    }


    // --------TIMER-----------
    // setInterval( () => {
    //     store.changeTime()
    // }, 30000)
    
    return (
        <div className='time-container'>
            <div className="time">{date.hour}:{date.minutes<10?"0"+date.minutes:date.minutes} <span>{date.hour<12?"AM":"PM"}</span></div>
            <div className="date-info">{days.find(day => day.includes(date.day.word))}, {date.day.num} {date.month.word} {date.year}</div>
            <div className="location">{country}, {city}</div>
        </div>
    )
}

function mapStateToProps(store) {
    return {
        date: store.date
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeTime: () => {
            const action = { type: "CHANGE_TIME"}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time);