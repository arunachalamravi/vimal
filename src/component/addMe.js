import React,{useEffect} from 'react'
import { connect } from 'react-redux'
// import {fetchData} from '../redux'



const AddMe = ({loading,users,fetchData}) => {
    // useEffect(()=>{
    //     fetchData()
    // },[fetchData])
    return (
        <div>
            {
                loading?<h1>loading</h1>:
                users&&users.map((a)=>{
                return <h1>{a.name}</h1>
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       users:state.users,
       loading:state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    //    fetchData:()=>dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMe)

