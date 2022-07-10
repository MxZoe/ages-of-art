import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "cards",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        cardsRequested: (cards, action) => {
            cards.loading = true;
        },

        cardsReceived: (cards, action) => {
            cards.list = action.payload;
            cards.loading = false;
        },

        cardsRequestFailed: (cards, action) => {
            cards.loading = false;
        },
    },
});

export default slice.reducer;

const { cardsRequested, cardsReceived, cardsRequestFailed } = slice.actions;

const url = "/cards";

export const loadcards = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: cardsRequested.type,
            onSuccess: cardsReceived.type,
            onError: cardsRequestFailed.type,
        })
    );
};