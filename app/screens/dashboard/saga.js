import { all, takeLatest } from "redux-saga/effects"

const TEST_SAGA = 'TEST_SAGA'

function* consoleTextSaga(params) {
   yield console.log(params)
}

export function* dashboardSaga(){
   yield all([takeLatest(TEST_SAGA, consoleTextSaga)])
}