import {all} from "redux-saga/effects"
import {watchRequest} from '../saga/sagaAction'

export function* rootSaga(){
    yield all([
        watchRequest
    ])
}
