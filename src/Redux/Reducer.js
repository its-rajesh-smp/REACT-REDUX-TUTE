const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREAMENT": {
            return { count: state.count + 2 }
        }
        case "DECREAMENT": {
            return { count: state.count - 2 }
        }
        default: {
            return state
        }
    }
}


export default reducer