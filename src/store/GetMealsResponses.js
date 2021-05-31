import { createSlice } from '@reduxjs/toolkit';

export const initialMealState = {
    meals: [],
    isLoading: true,
    httpError: '',

};

const mealSlice = createSlice({
    name: 'meals',
    initialState: initialMealState,
    reducers: {
        getMeal() { },
        setMeals(state, action) {
            state.meals = action.payload
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        },
        setHttpError(state, action) {
            state.httpError = action.payload
        }
    },
});

export const mealActions = mealSlice.actions;

export const mealReducer = mealSlice.reducer;
