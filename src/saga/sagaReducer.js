import {WATCH_REQUEST,REQUESTASYNC} from './sagaActiontype'
const initialState = {
    user:[]
}

const sagaReducer = (state=initialState,action) =>{
    switch(action.type){
        case WATCH_REQUEST: return{
            ...state,
            user:[]
        }
        case REQUESTASYNC:return{
            user:action.payload
        }
    }
}