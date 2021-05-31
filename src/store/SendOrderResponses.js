import { createSlice } from '@reduxjs/toolkit';

export const initialOrderState = {
    isCheckout: false,
    isSubmitting: false,
    didSubmit: false,
    error: null

};

const orderSlice = createSlice({
    name: 'orders',
    initialState: initialOrderState,
    reducers: {
        sendOrderRequest() { },
        setIsCheckout(state, action) {
            state.isCheckout = action.payload
        },
        setIsSubmitting(state, action) {
            state.isSubmitting = action.payload
        },
        setDidSubmit(state, action) {
            state.didSubmit = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        }
    },
});

export const orderActions = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
