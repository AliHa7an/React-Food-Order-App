import { takeEvery, takeLatest } from "redux-saga/effects";
import { handleGetMeals, handleSendOrder } from './requestHandlers/RequestsHandlersSagas'
import { mealActions } from './../GetMealsResponses'
import { orderActions } from "../SendOrderResponses";

export function* watcherGetMealsSaga() {
    yield takeLatest(mealActions.getMeal.type, handleGetMeals);
}

export function* watcherSendOrderSaga() {
    yield takeEvery(orderActions.sendOrderRequest.type, handleSendOrder);
}