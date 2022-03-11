import React from "react";
import WeatherInfo from "./WeatherInfo";

export default function Weather ({props, day}) {
    const data = props.weatherOW,
        today = day,
        days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        todayIndex = days.findIndex(item => item.includes(today.toUpperCase()));

    let trueWeek = days.slice(todayIndex+1);
    trueWeek.unshift("TODAY");
    trueWeek= trueWeek.concat(days.splice(0, todayIndex));

    

    return (
        <div className="weather">
            {trueWeek.map( (item, index) => {
                return (
                    <WeatherInfo 
                        temp={Math.round(data.temp-273)} 
                        iconId={data.icon} 
                        classInfo={index==0?"today":"anotherDay"} 
                        day={item} 
                        key={index}>
                    </WeatherInfo>
                )
            })}
        </div> 
    )
}
