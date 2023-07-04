import axios from "axios";
import { PLACE_ORDER_FAILURE, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS } from "../Const/const";

export const placeOrder = (token, total) => async (dispatch, getState) => {
  dispatch({ type: PLACE_ORDER_REQUEST });

  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().CartReducer.cartItems;

  try {
    const response = await axios.post('/api/order/placeorder', {
      token,
      total,
      currentUser,
      cartItems
    });

    dispatch({ type: PLACE_ORDER_SUCCESS });
    console.log('order Action', response);
  } catch (error) {
    dispatch({ type: PLACE_ORDER_FAILURE });
    console.log('order Action', error);
  }
};
