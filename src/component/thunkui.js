import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchUser} from '../thunk/index'

const Thunkui = ({loading,users,err,fetchdata}) => {
    // useEffect(()=>{
    //     fetchdata()
    // },[])

    return (
        <div>
            {loading?"loading":users&&users.map((e)=>{
                console.log(e)
                return(
                <h1 key={e.id}>{e.name}</h1>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        loading : state.loading,
        users : state.users,
        err : state.err
    }
}

const mapDispatchToProps = (dispatch)=> {
    return{
        fetchdata:()=>dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thunkui)
