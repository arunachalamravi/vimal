import {WATCH_REQUEST,REQUESTASYNC} from './sagaActiontype'
import {takeEvery,put, call} from 'redux-saga/effects'
import axios from 'axios'
export function cons(){
    console.log("async")
}
function apicall(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        const users = res.data
        // console.log(users)
    })
    .catch(err=>{
        const a= err.message
    })
}
function* fetchusers(action){
    try{
        const users = yield call(apicall)
        yield put({type:REQUESTASYNC,payload:users})
    } catch (e){
        // yield put()
        yield cons()
    }
}
// export function* requestSync(users){
//     yield put({type:REQUESTASYNC,payload:users})
//     yield put(cons)
// }

export function* watchRequest(){
    yield takeEvery({type:WATCH_REQUEST},fetchusers)
} 