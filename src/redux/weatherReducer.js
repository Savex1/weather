const initialState = {
    weatherOW: {
        country: null,
        icon: null,
        lat: null,
        lon: null,
        name: null,
        temp: null
    },
}

const  weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'WEATHER_OW_DATA_SUCCESS':
            return {
                ...state,
                weatherOW: action.weather
            }
        case 'WEATHER_SG_DATA_SUCCESS':
            return {
                ...state,
                weatherSG: action.weather
            }
        default: 
            return state;
    }
}

export default weatherReducer