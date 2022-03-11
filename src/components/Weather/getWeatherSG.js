export function getWetherSGSuccess(weather) {
    return {
        type: 'WEATHER_SG_DATA_SUCCESS',
        weather
    }
}

export function getWetherSG (lat, lon, time) {
    let year = time.year,
        month = time.month.num,
        day = time.day.num,
        hour = time.hour;
        
    let todayTime = +new Date(`${year}-${month<10?'0'+month:month}-${day<10?'0'+day:day}T${hour}:00:00+03:00`)/1000;

    let url = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=airTemperature&start=${todayTime}&end=${todayTime}`;

    return (dispatch) => {
        if (!localStorage.getItem("weatherSG")) {
                
            fetch(url, {
                headers: {
                    'Authorization': '7d02d26a-9ac9-11ec-9a99-0242ac130002-7d02d3d2-9ac9-11ec-9a99-0242ac130002'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(weather => {
                let weatherObj = new Object;
                weatherObj = {
                    temp: Math.round(weather.hours[0].airTemperature.noaa)
                }
                localStorage.setItem('weatherSG', JSON.stringify(weatherObj));
                return dispatch(getWetherSGSuccess(weatherObj))
            })
        } else dispatch(getWetherSGSuccess(JSON.parse(localStorage.getItem("weatherSG"))))
    }
}