import React from 'react';
import Card from 'react-bootstrap/Card';
import '../cart/Cart.css';
import Checkout from '../Checkout/Checkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../../action/cartAction';



function Cart() {

  const dispatch = useDispatch()

  const cartstate = useSelector(state => state.CartReducer)
  const { cartItems } = cartstate
  console.log("cartItems", cartItems)

  var total = cartItems.reduce((x ,item)=>x+item.price,0)



  return (
    <div className='nav-margin'>
      <div className='center'>  <h1>MY CART</h1> </div>

      {
        cartItems.map(item => (
          <Card.Body>

            <Container>


              <Row className='center' >



                <Col className=' w-18 shadow p-3 mb-5 bg-white rounded' xs={6} md={2}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                  />
                </Col>
                <Col className=' w-18 shadow p-3 mb-5 bg-white rounded collum' xs={6} md={5} >
                  <h3>{item.name}</h3>
                  <h6>price Per Item {item.prices}</h6>
                  <h6>Total Quntity {item.qunatity} </h6>
                  <h6 className='mt-3'>
                   Toatl Price: {item.qunatity}  
                    <FontAwesomeIcon  icon={faXmark}  />
                    {item.prices}={item.price} Rs/-
                  </h6>


                  {/* Add the following CSS */}
                  <FontAwesomeIcon icon={faTrashCan} onClick={()=>(dispatch(deleteFromCart(item)))} className="fa-trash-can" />
                </Col>




              </Row>


            </Container>

          </Card.Body>
        ))
      }
      <div className='center'>
        <h5>  Total Amount {total}</h5>

        <Checkout  total={total} />

        {/* <Button className='w-30 ms-3 mb-1' variant="primary">Pay Now</Button> */}
      </div>




    </div>
  );
}

export default Cart;
