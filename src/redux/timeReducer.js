const initialState = {
    date: {
        year: new Date().getFullYear(),
        month: {
            num: new Date().getMonth(),
            word: new Date().toDateString().split(" ")[1]
        },
        day: {
            num: new Date().getDate(),
            word: new Date().toDateString().split(" ")[0]
        },
        hour: new Date().getHours(),
        minutes: new Date().getMinutes()
    },
}


const timeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_TIME":
            return {
                ...state,
                date: {
                    ...state.date,
                    hour: new Date().getHours(),
                    minutes: new Date().getMinutes()
                }
            }
        default: 
            return state;
    }
}

export default timeReducer