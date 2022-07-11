import axios from "axios";
import * as actions from "../api";
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        const newId = randomNumber(1,480129);
        if (action.type !== actions.apiCallBegan.type) return next(action);

        const { url, method, data, onStart, onSuccess, onError } =
            action.payload;

        if (onStart) dispatch({ type: onStart });

        next(action);

        try {
            const response = await axios.request({
                baseURL: "https://collectionapi.metmuseum.org",
                url: `/public/collection/v1/objects/${newId}`,
                method,
                
                
            });
            // General
            dispatch(actions.apiCallSucess(response.data));
            // Specific
            if (onSuccess)
                dispatch({ type: onSuccess, payload: response.data });
        } catch (error) {
            // General
            dispatch(actions.apiCallFailed(error.message));
            // Specific
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default api;