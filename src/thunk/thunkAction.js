import {FETCH_USER_REQUEST} from './thunkActiontype'
import {FETCH_USER_SUCCESS} from './thunkActiontype'
import {FETCH_USER_FAILURE} from './thunkActiontype'
import axios from 'axios'

export const fetchUserRequest = () => {
    return{
        type : FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return{
        type : FETCH_USER_SUCCESS,
        payload : users
    }
}

export const fetchUserFailure = (err) => {
    return{
        type : FETCH_USER_FAILURE,
        payload : err
    }
}

export const fetchUser = () => {
    return(dispatch)=>{
        dispatch(fetchUserRequest())

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            const users = res.data
            console.log(users)
            dispatch(fetchUserSuccess(users))
        })
        .catch((e)=>{
            const err = e.message
            dispatch(fetchUserFailure(err))
        })
    }
}