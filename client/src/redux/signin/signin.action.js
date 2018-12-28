import {SET_USER_DATA, RESET_USER_DATA} from './signin.actionType'
import axios from 'axios'
import swal from 'sweetalert';


export const signInUser = (payload)=> {
    return(dispatch)=> {
        return axios({
            method: 'POST',
            url: `http://localhost:3000/api/users/signin`,
            data:{
                username_email:payload.username_email,
                password: payload.password
            }
        })
        .then(user =>{
            if(user.status === 200){
                swal("Success Login!", "welcome to react password manager", "success");
                localStorage.setItem('userId', user.data.data.id)
                localStorage.setItem('userToken', user.data.data.token)
                localStorage.setItem('username', user.data.data.name)
                localStorage.setItem('email', user.data.data.email)
                dispatch(signInUserSuccess(user.data.data))
            }else{
                swal("Failed Login!", "Check your username/password", "error");
            }
        })
        .catch(err =>{
            swal("Failed Login!", `${err}!`, "error");
        })
    }
}

export const signUpUser = (payload) =>{
    return(dispatch) => {
        return axios({
            method: 'POST',
            url: `http://localhost:3000/api/users/signup`,
            data:{
                username: payload.username,
                password: payload.password,
                name: payload.name,
                email: payload.email,
                gender: payload.gender
            }
        })
        .then(user =>{
            if(user.status === 200){
                swal("Sign up Success!", "welcome to react password manager", "success");
                localStorage.setItem('userId', user.data.data.id)
                localStorage.setItem('userToken', user.data.data.token)
                localStorage.setItem('username', user.data.data.name)
                localStorage.setItem('email', user.data.data.email)
                dispatch(signInUserSuccess(user.data.data))
            }else{
                swal('Sign up Failed!',"","error")
            }
        })
        .catch(err=>{
            this.history.pushState('/signup')
        })
    }
}

export const signOutUser = () => {
    return dispatch => {
        dispatch(signOutUserSuccess())
    }
}

const signOutUserSuccess = () =>{
    return{
        type: RESET_USER_DATA
    }
}

const signInUserSuccess = (payload) => {
    return{
        type: SET_USER_DATA,
        payload: payload
    }
}