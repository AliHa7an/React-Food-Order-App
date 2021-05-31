import { call, put } from "redux-saga/effects";
import sendRequest from '../requests/SendRequest'
import { mealActions } from '../../GetMealsResponses'
import { orderActions } from "../../SendOrderResponses";

export function* handleGetMeals() {
    const url = 'https://react-http-59055-default-rtdb.firebaseio.com/meals.json'
    try {

        const responseData = yield call(sendRequest, { url });
        const loadedMeals = [];

        for (const key in responseData) {
            loadedMeals.push({
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price,
            });
        }

        yield put(mealActions.setMeals(loadedMeals))
        yield put(mealActions.setIsLoading(false))
    } catch (error) {
        yield put(mealActions.setIsLoading(false))
        yield put(mealActions.setHttpError(error.message || 'Request Failed'))
    }
}

export function* handleSendOrder(action) {
    const orderedItems = [];
    const items = action.payload.items
    for (const element of items) {
        const { id, ...item } = element
        orderedItems[id] = item;
    }

    const url = 'https://react-http-59055-default-rtdb.firebaseio.com/orders.json'
    const method = 'POST'
    const body = {
        user: action.payload.userData,
        orderedItems: { ...orderedItems },
    }


    try {
        yield put(orderActions.setIsSubmitting(true))
        yield call(sendRequest, { url, method, body });
        yield put(orderActions.setIsSubmitting(false))
        yield put(orderActions.setDidSubmit(true))

    } catch (error) {
        yield put(orderActions.setIsSubmitting(false))
        yield put(orderActions.setDidSubmit(true))
        yield put(orderActions.setError(error.message || 'Failed to send the Your Order!'))

    }
}