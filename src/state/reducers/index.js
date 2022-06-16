import { combineReducers } from "redux";
import signupReducer, {setName, setEmail, setNumber, setPassword} from "./signupReducer";
// export * as signupReducer from "./signupReducer";

const rootReducer = combineReducers({
    userName : setName,
    userNumber : setNumber,
    userEmail : setEmail,
    userPassword : setPassword,
})

export default rootReducer;