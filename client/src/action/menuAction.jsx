import axios from 'axios'
import { GET_MENU_FAILURE,GET_MENU_SUCCESS,GET_MENU_REQUEST } from '../Const/const'



export const getMenu =()=> async (dispatch) =>{
dispatch({type:GET_MENU_REQUEST})
   

    try {
        const res = await axios.get  ('api/menu/getmenu')
        console.log("Action",res.data);
        dispatch({
            payload:res.data,
            type:GET_MENU_SUCCESS
        })

        
    } catch (error) {
        dispatch({
           payload:error,
           type:GET_MENU_FAILURE
        })

    }

}
