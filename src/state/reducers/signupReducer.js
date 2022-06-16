export default function signupReducer(){
    return(
        <div></div>
    )
}
export const setName = (state = '', action) => {
    switch (action.type) {
        case "SETENAME":
            return action.payload
    
        default:
            return state;
    }
}
export const setNumber = (state = '', action) => {
    switch (action.type) {
        case "SETENUMBER":
            return action.payload
    
        default:
            return state;
    }
}
export const setEmail = (state = '', action) => {
    switch (action.type) {
        case "SETEMAIL":
            return action.payload
    
        default:
            return state;
    }
}
export const setPassword = (state = '', action) => {
    switch (action.type) {
        case "SETEPASWWORD":
            return action.payload
    
        default:
            return state;
    }
}