// import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./state/reducers";

// const store = configureStore({
//     reducer: rootReducer
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./state/reducers";

const store = configureStore({
    reducer: rootReducer
}, applyMiddleware(thunk))
export default store;
