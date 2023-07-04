import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { placeOrder } from '../../action/oderAction';


function Checkout({total}) {

    const dispatch = useDispatch()

    function tokeHandiler(token){

        console.log(token);
        dispatch(placeOrder (token,total))
    }
  return (
    <div>
<StripeCheckout
amount={total*100}
shippingAddress
token={tokeHandiler}
currency='INR'
stripeKey='pk_test_51NHRUISDvhvYrutlqj05f1cDBT72Ru39FgmmIKfLV0yxtpVuQEY2q8oKEOJ2yMaEBwfjapSmDK75N84sOe8OFlO000FT1eMGCK'
>
    
            <Button  className='w-30 ms-3  ' style={{ marginBottom: '3rem' }} >Pay Now</Button>
</StripeCheckout>
    </div>
  )
}

export default Checkout