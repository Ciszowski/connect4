
const initialState= {
    tictactoe: ""
}

export function redGame(state = initialState, action){
    switch(action.type){
        case "P4":
            return {
                ...state
            }
        default:
            return state;
    }
}