import { ADD_TO_CART, DELETE_FROM_CART } from "../Const/const";



export const addToCart=(foodItem ,qunatity)=>(dispatch,getState)=>{


    var cartItem ={
        name: foodItem.foodname,
        _id: foodItem._id,
        image: foodItem.image,
        qunatity: qunatity,
        prices: foodItem.price,
        price:foodItem.price *qunatity

    }

    dispatch({
        type:ADD_TO_CART,
        payload:cartItem
    })
    const cartItems=getState().CartReducer.cartItems;
localStorage.setItem("cartItems",JSON.stringify(cartItems));
}

export const deleteFromCart=(foodItem)=>(dispatch,getState)=>{
    dispatch({type:DELETE_FROM_CART,payload:foodItem})
    const cartItems=getState().CartReducer.cartItems;
localStorage.setItem("cartItems",JSON.stringify(cartItems));
}