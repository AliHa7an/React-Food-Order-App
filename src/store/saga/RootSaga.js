import { all } from "redux-saga/effects";
import { watcherGetMealsSaga, watcherSendOrderSaga } from './WatcherSagas'

export function* rootSaga() {
    yield all([
        watcherGetMealsSaga(),
        watcherSendOrderSaga()
    ])
}