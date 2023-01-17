import { all, fork } from 'redux-saga/effects';
import { dashboardSaga } from '../screens/dashboard/saga';

export default function* rootSaga() {

   yield all([fork(dashboardSaga)])
}