import { TESTIMONY } from "../actions/actionType";

const initialState = {
    testimony: [],
}

export default function testimonyReducer(state = initialState, action) {
    switch (action.type) {
        case TESTIMONY:
            return {
                ...state,
                testimony: action.payload,
            }
        default:
            return state
    }
}