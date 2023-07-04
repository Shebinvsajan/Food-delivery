import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Const/const";

export const registerUserReducer =(state={user:[]},action)=>{

    switch(action.type){
        case USER_REGISTER_REQUEST: return{
            loading:true
        }
        case USER_REGISTER_SUCCESS: return{
            loading:false,
            success:true
        }
        case USER_REGISTER_FAILURE: return{
            loading:false,
            error:action.payload

        }
        default :return state

    } 
}

export const loginUserReducer = ( state={},action)=>{
    switch (action.payload) {
        case  USER_LOGIN_REQUEST: return{
            loading:true
        }
        case USER_REGISTER_SUCCESS:
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
            const newState = {
                loading: false,
                success: true,
                currentUser: action.payload
            };
            window.location.href = "/home";
            return newState;
        
        case USER_LOGIN_FAILURE:return{
            loading:false,
            error:action.payload,
            
        }
            
            
    
        default: return state
    }
}