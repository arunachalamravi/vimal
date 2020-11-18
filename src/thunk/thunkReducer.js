
import {FETCH_USER_REQUEST} from './thunkActiontype'
import {FETCH_USER_SUCCESS} from './thunkActiontype'
import {FETCH_USER_FAILURE} from './thunkActiontype'

const initialState = {
    loading : true,
    users : [],
    err : ''
}

const Reducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_USER_REQUEST : return {
            ...state,
            loading : true
        }
        case FETCH_USER_SUCCESS : return{
            loading : false,
            users : action.payload
        }
        case FETCH_USER_FAILURE : return{
            loading : false,
            err : action.payload
        }
        default :return state
    }
}

export default Reducer

