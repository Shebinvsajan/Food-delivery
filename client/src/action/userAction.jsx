import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Const/const"
import axios from 'axios'

export const registerUser = (user) => async dispatch => {

    dispatch({ type: USER_REGISTER_REQUEST })

    try {
        const res = await axios.post('/api/users/register', user)
        dispatch({ type: USER_REGISTER_SUCCESS })
        console.log(res);
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILURE, payload: error })
    }

}
export const loginUser = (user) => async dispatch => {

    dispatch({ type: USER_LOGIN_REQUEST })
    try {
        const res = await axios.post('/api/user/login', user)
        console.log(res.data);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data })
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        window.location.href = '/home';

    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILURE, payload: error })

    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('cartItems')
    window.location.href = '/'
}