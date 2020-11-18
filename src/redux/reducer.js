import {FETCH_USER_REQUEST} from './actionTypes'
import {FETCH_USER_SUCCESS} from './actionTypes'
import {FETCH_USER_FAILURE} from './actionTypes'


const initialState = {
    loading:true,
    users:[],
    error:""
}

const reducer = (state=initialState,action)=>{
    console.log(action)

    switch(action.type){
        case FETCH_USER_REQUEST : return {
            ...state,
            loading:true
        }
        case FETCH_USER_SUCCESS : return {
            loading:false,
            users:action.payload,
            error:""
        }
        case FETCH_USER_FAILURE : return {
            loading:false,
            users:[],
            error:action.payload
        }
        default : return  state
    }

}
export default reducer