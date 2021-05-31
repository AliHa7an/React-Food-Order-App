import { createSlice } from '@reduxjs/toolkit';

export const initialCartState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        add(state, action) {
            const { item } = action.payload
            const updatedTotalAmount =
                state.totalAmount + item.price * item.amount;

            const existingCartItemIndex = state.items.findIndex(
                (everyItem) => everyItem.id === item.id
            );
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + item.amount,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(item);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        },
        remove(state, action) {
            const { id } = action.payload
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === id
            );
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== id);
            } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        },

        clear() {
            return initialCartState;
        }
    },
});

export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

