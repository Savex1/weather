import store from "../redux/store";

export function getLocationSuccess(location) {
    return {
        type: 'LOCATION_DATA_SUCCESS',
        location
    }
}

export function getLocation() {
    let geolocation = navigator.geolocation;

    geolocation.getCurrentPosition(showLocation, errorHandler) 
}

function showLocation( position ) {
    let userLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    }
    localStorage.setItem("location", JSON.stringify(userLocation));
    store.dispatch(getLocationSuccess(userLocation));
}

function errorHandler( err ) {
    if (err.code == 1) {
        console.log(err)
    }
}

