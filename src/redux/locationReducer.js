

const initialState = {}

let geolocation = navigator.geolocation;
geolocation.getCurrentPosition(showLocation) 

function showLocation( position ) {
    let userLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    }
    initialState.location = userLocation
}

const  locationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOCATION_DATA_SUCCESS':
            return {
                ...state,
                location: action.location
            }
        default: 
            return state;
    }
}

export default locationReducer