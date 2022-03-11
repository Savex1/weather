export function getWetherOWSuccess(weather) {
    return {
        type: 'WEATHER_OW_DATA_SUCCESS',
        weather
    }
}

export function getWetherOW (lat, lon) {
    let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&limit=1&appid=8fe20aa02148f11fce2d5d0713de34af`;

    return (dispatch) => {
        if (!localStorage.getItem("weatherOW")) {
            fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(weather => {
                let weatherObj = {
                    country: weather.city.country,
                    name: weather.city.name,
                    temp: weather.list[0].main.temp,
                    icon: weather.list[0].weather[0].icon,
                    lat: lat,
                    lon: lon
                }
                localStorage.setItem('weatherOW', JSON.stringify(weatherObj));
                return dispatch(getWetherOWSuccess(weatherObj))
            })
        } else dispatch(getWetherOWSuccess(JSON.parse(localStorage.getItem("weatherOW"))))
    }
}