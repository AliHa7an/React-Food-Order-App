import { combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux'
import { cartReducer } from './cart-redux';
import createSagaMiddleware from "redux-saga";
import { mealReducer } from './GetMealsResponses'
import { rootSaga } from '../store/saga/RootSaga'
import { orderReducer } from './SendOrderResponses';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['auth', 'user']
// }

const reducer = combineReducers({
    cart: cartReducer,
    meals: mealReducer,
    orders: orderReducer
});

// const persistedReducer = persistReducer(persistConfig, reducer)

// sagaMiddleware.run(rootSaga)

export const store = createStore(reducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

// export const persistor = persistStore(store)

//export const store = createStore(reducer)