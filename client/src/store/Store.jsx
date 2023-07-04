import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllMenuReducer } from "../reducer/menuReducer";
import { CartReducer } from '../reducer/cartreduscer';
import { json } from 'react-router-dom';
import { loginUserReducer, registerUserReducer } from '../reducer/userReducer';
import { placeOrderReducer } from '../reducer/oderReducer';

// combine Reducers  
const finalReducer = combineReducers({
  getAllMenuReducer: getAllMenuReducer,
  CartReducer: CartReducer,
  registerUserReducer:registerUserReducer,
  loginUserReducer:loginUserReducer,
  placeOrderReducer:placeOrderReducer
  
});


// middlewar 
const middleware = [thunk]


const cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]
const currentUser  = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null




const instialstate = {
  CartReducer:{
    cartItems:cartItems

  },
  loginUserReducer:{
    currentUser:currentUser
  }
}

// Dev tool
const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, instialstate, composeEnhancers(applyMiddleware(...middleware)))

export default store