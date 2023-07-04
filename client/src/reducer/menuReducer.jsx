import { GET_MENU_FAILURE,GET_MENU_REQUEST,GET_MENU_SUCCESS } from "../Const/const"

export const  getAllMenuReducer=(state={foodItem:[]},action)=>{
    switch(action.type){

        case GET_MENU_REQUEST: return{
            loading:true,
            ...state
            

        }
        case GET_MENU_SUCCESS: return{
            loading:false,
            foodItem: action.payload,

        }
        case GET_MENU_FAILURE: return{
            loading:false,
            error: action.payload

        }
        default :return state
    

    }

}
