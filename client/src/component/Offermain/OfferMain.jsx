import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import './OfferMain.css'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../../action/cartAction';

function OfferMain({foodItem}) {
    const [qunatity, setQuantity] = useState(1)

    
  const dispatch = useDispatch()
  

  function addtocart(){
    dispatch(addToCart(foodItem, qunatity))
  }
  return (
    <div className='head shadow-lg p-3 mb-5 bg-white rounded' >

    <img  className='food-img img-fluid ' src={foodItem.image} alt="" />
    <div className="offer-container">
        <h1 className="offer">{foodItem.offer}%</h1>
      </div>    <h1 className='food-head w-100'>{foodItem.foodname}</h1>
    <div className='flex-container'>


      <div className='w-100 mt-2'>
        <p>Qunatity</p>

        <select value={qunatity} onChange={(e) => {
          setQuantity(e.target.value
          )
        }} className='w-50 h-50'>
          {[...Array(10).keys()].map((x, i) => {
            return <option value={i + 1}>{i + 1}</option>
          })}

        </select>

      </div>

      <div className='w-150 mt-2'>
        <p>Price</p>
        <p>{foodItem.price * qunatity}RS</p>

      </div>


    </div>


    <div className='mt-2 w-100 ' >
      <Button className='w-100 btn' onClick={addtocart} >Add To Cart</Button>

    </div>


  </div>
  )
}

export default OfferMain