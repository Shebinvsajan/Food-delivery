import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './CardBox.css'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../../action/cartAction';

function CardBox({ foodItem }) {

  const [qunatity, setQuantity] = useState(1)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  

  function addtocart(){
    dispatch(addToCart(foodItem, qunatity))
  }

  return (
    <div className='head shadow-lg p-3 mb-5 bg-white rounded card' >

      <img onClick={handleShow} className='food-img img-fluid' src={foodItem.image} alt="" />
      <h1 onClick={handleShow} className='food-head w-100'>{foodItem.foodname}</h1>
      <div className='flex-container'>


        <div className='w-100 mt-2 '>
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

      {/* Modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{foodItem.foodname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className=' img-fluid' src={foodItem.image} alt="" />
          <p className='mt-3'>{foodItem.description}</p>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default CardBox