import {FETCH_USER_REQUEST} from './actionTypes'
import {FETCH_USER_SUCCESS} from './actionTypes'
import {FETCH_USER_FAILURE} from './actionTypes'
import axios from 'axios'

export const fetchUserRequest = () => {
    return{
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

export const fetchUserFailure = (a) => {
    return{
        type:FETCH_USER_FAILURE,
        payload:a
    }
}
export const fetchData = () =>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            const users = res.data
            console.log(users)
            dispatch(fetchUserSuccess(users))
        })
        .catch(err=>{
            const a= err.message
            dispatch(fetchUserFailure(a))
        }
            )
    }
}