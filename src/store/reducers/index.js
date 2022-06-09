import { combineReducers } from "redux";
import helpTipsReducer from "./helpTipsReducer";
import testimonyReducer from "./testimonyReducer";

const rootReducer = combineReducers({
    helpTips: helpTipsReducer,
    testimony: testimonyReducer,
})

export default rootReducer;