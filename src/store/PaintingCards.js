import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "PaintingCards",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        cardsRequested: (PaintingCards, action) => {
            PaintingCards.loading = true;
        },

        cardsReceived: (PaintingCards, action) => {
          PaintingCards.list = action.payload;
          PaintingCards.loading = false;
        },

        cardsRequestFailed: (PaintingCards, action) => {
          PaintingCards.loading = false;
        },
    },
});

export default slice.reducer;

const { cardsRequested, cardsReceived, cardsRequestFailed } = slice.actions;

const url = "/PaintingCards";

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