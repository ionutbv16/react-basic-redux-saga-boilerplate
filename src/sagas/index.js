import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import {fetchUser, callUser, AsyncFetchUsers} from '../actions'
import {FETCH_USER, CALL_USER} from '../constants'


function* workerSaga() {
    console.log('workerSaga'  );
    try {
        const getUser =  yield call (AsyncFetchUsers)
        yield put (fetchUser(getUser) );
    }
    catch (e) {
        console.log(e)
    }

}

export default function* mySaga() {
    yield takeLatest(CALL_USER, workerSaga )
}