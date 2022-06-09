import { HELP_TIPS } from "../actions/actionType";

const initialState = {
    helpTips: [],
}

export default function helpTipsReducer(state = initialState, action) {
    switch (action.type) {
        case HELP_TIPS:
            return {
                ...state,
                helpTips: action.payload,
            }
        default:
            return state
    }
}