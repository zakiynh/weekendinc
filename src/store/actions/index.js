import { TESTIMONY, HELP_TIPS } from "./actionType";
import axios from "axios";

export function fetchTestimony() {
    return function (dispatch) {
        axios
            .get("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
            .then((response) => {
                dispatch({
                    type: TESTIMONY,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export function fetchHelpTips() {
    return function (dispatch) {
        axios
            .get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
            .then((response) => {
                dispatch({
                    type: HELP_TIPS,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
}
